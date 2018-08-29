/*!
 * V4Fire Core
 * https://github.com/V4Fire/Core
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Core/blob/master/LICENSE
 */

import $C = require('collection.js');

export interface Config {
	lang: string;
	api?: string | undefined;
	appName?: string | undefined,
	onlineCheckURL?: string | undefined;
	onlineCheckInterval: number;
	onlineCheckTimeout: number;
	onlineLastDateSyncInterval: number;
	onlineRetryCount: number;
}

const config: Config = {
	/**
	 * Default system language
	 */
	lang: LANG,

	/**
	 * Base API URL
	 */
	api: API_URL,

	/**
	 * Base app name
	 */
	appName: APP_NAME,

	/**
	 * Online check url
	 */
	onlineCheckURL: 'https://www.google.com/favicon.ico',

	/**
	 * Online check interval
	 */
	onlineCheckInterval: (5).seconds(),

	/**
	 * Timeout for online check
	 */
	onlineCheckTimeout: (2).seconds(),

	/**
	 * Allowed count of online status checking errors
	 */
	onlineRetryCount: 3,

	/**
	 * Last online date sync interval
	 */
	onlineLastDateSyncInterval: (1).minute()
};

/**
 * Extends the config object
 * @param args
 */
export function extend<T extends Config = Config>(...args: Dictionary[]): T {
	return <any>$C.extend({
		deep: true,
		concatArray: true,
		concatFn: (a: any[], b: any[]) => a.union(b),
		withUndef: true
	}, config, ...args);
}

export default config;
