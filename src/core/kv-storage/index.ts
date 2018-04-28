/*!
 * V4Fire Core
 * https://github.com/V4Fire/Core
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Core/blob/master/LICENSE
 */

import { convertIfDate } from 'core/json';
import { syncLocalStorage, asyncLocalStorage, syncSessionStorage, asyncSessionStorage } from 'core/kv-storage/engines';

export const
	local = factory(syncLocalStorage),
	asyncLocal = factory(asyncLocalStorage, true),
	session = factory(syncSessionStorage),
	asyncSession = factory(asyncSessionStorage, true);

export const
	{get, set, remove, namespace} = local;

export interface Namespace {
	exists(key: string): boolean;
	get(key: string): any;
	set(key: string, value: any): void;
	remove(key: string): void;
	clear(filter?: (el: string, key: string) => any): void;
}

export interface FactoryResult extends Namespace {
	namespace(name: string): Namespace;
}

export interface AsyncNamespace {
	exists(key: string): Promise<boolean>;
	get(key: string): Promise<any>;
	set(key: string, value: any, ttl?: number): Promise<void>;
	remove(key: string): Promise<void>;
	clear(filter?: (el: string, key: string) => any): Promise<void>;
}

export interface AsyncFactoryResult extends AsyncNamespace {
	namespace(name: string): AsyncNamespace;
}

function factory(storage: Dictionary, async: true): AsyncFactoryResult;
function factory(storage: Dictionary, async?: false): FactoryResult;
function factory(storage: Dictionary, async?: boolean): FactoryResult | AsyncFactoryResult {
	let
		get,
		set,
		remove,
		exists,
		clear,
		keys;

	try {
		get = (storage.getItem || storage.get).bind(storage);
		set = (storage.setItem || storage.set).bind(storage);
		remove = (storage.removeItem || storage.remove || storage.delete).bind(storage);

		const _exists = storage.exists || storage.includes || storage.has;
		exists = Object.isFunction(_exists) ? _exists.bind(storage) : undefined;

		const _clear = storage.clear || storage.clearAll || storage.truncate;
		clear = Object.isFunction(_clear) ? _clear.bind(storage) : undefined;

		const _keys = storage.keys;
		keys = Object.isFunction(_keys) ? _keys.bind(storage) : () => Object.keys(storage);

	} catch (_) {
		throw new TypeError('Invalid storage driver');
	}

	function wrap(val?: any, action?: (val: any) => any): any {
		if (async) {
			return (async () => {
				val = await val;

				if (action) {
					return action(val);
				}

				return val;
			})();
		}

		if (action) {
			return action(val);
		}

		return val;
	}

	const obj = {
		/**
		 * Returns true if the specified key exists in a storage
		 * @param key
		 */
		exists(key: string): any {
			if (exists) {
				return wrap(exists(key));
			}

			return wrap(get(key), (v) => v !== null);
		},

		/**
		 * Returns a value from a storage by the specified key
		 * @param key
		 */
		get(key: string): any {
			return wrap(get(key), (v) => {
				if (v === null) {
					return undefined;
				}

				if (Object.isString(v) && /^[[{"]|^(?:true|false|\d+)$/.test(v)) {
					return JSON.parse(v, convertIfDate);
				}

				return v;
			});
		},

		/**
		 * Saves a value to a storage by the specified key
		 *
		 * @param key
		 * @param value
		 * @param [ttl]
		 */
		set(key: string, value: any, ttl?: number): any {
			return wrap(set(key, JSON.stringify(value)), () => undefined);
		},

		/**
		 * Removes a value from a storage by the specified key
		 * @param key
		 */
		remove(key: string): any {
			return wrap(remove(key), () => undefined);
		},

		/**
		 * Clears a storage by the specified filter and returns a list of the removed keys
		 * @param [filter] - filter for removing (if not defined, then the storage will be cleared)
		 */
		clear(filter?: Function): any {
			if (filter || !clear) {
				return wrap(keys(), async (keys) => {
					for (const key of keys) {
						const
							el = await obj.get(key);

						if (!filter || filter(el, key)) {
							await remove(key);
						}
					}
				});
			}

			return wrap(clear(), () => undefined);
		},

		/**
		 * Returns a storage object by the specified namespace
		 * @param name
		 */
		namespace(name: string): any {
			const
				k = (key) => `${name}.${key}`;

			return {
				exists(key: string): boolean {
					return obj.exists(k(key));
				},

				get(key: string): any {
					return obj.get(k(key));
				},

				set(key: string, value: any, ttl?: number): any {
					return obj.set(k(key), value, ttl);
				},

				remove(key: string): any {
					return obj.remove(k(key));
				},

				clear(filter?: Function): any {
					return wrap(keys(), async (keys) => {
						for (const key of keys) {
							if (key.split('.')[0] !== name) {
								return;
							}

							const
								el = await obj.get(key);

							if (!filter || filter(el, key)) {
								await remove(key);
							}
						}
					});
				}
			};
		}
	};

	return obj;
}
