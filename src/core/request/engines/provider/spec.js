/*!
 * V4Fire Core
 * https://github.com/V4Fire/Core
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Core/blob/master/LICENSE
 */

import express from 'express';

import { set, get } from 'core/env';

import { globalOpts } from 'core/request';
import Provider, { provider } from 'core/data';
import makeProviderEngine from 'core/request/engines/provider';

@provider
class ProviderEngineTestBaseProvider extends Provider {
	static request = Provider.request({
		api: {
			url: 'http://localhost:3000'
		}
	});
}

@provider
class ProviderEngineTestDataProvider extends Provider {
	static request = ProviderEngineTestBaseProvider.request({
		engine: makeProviderEngine(ProviderEngineTestBaseProvider)
	});

	baseURL = '/data';
}

@provider
class ProviderEngineTestJSONProvider extends Provider {
	static request = ProviderEngineTestDataProvider.request({
		engine: makeProviderEngine(ProviderEngineTestDataProvider, {
			peek: 'get'
		})
	});

	baseURL = 'json';
}

@provider
class ProviderEngineTestDecodersProvider extends Provider {
	static request = ProviderEngineTestJSONProvider.request({
		engine: makeProviderEngine(ProviderEngineTestJSONProvider)
	});

	static encoders = {
		post(data) {
			data.id = 12345;
			return data;
		}
	};

	static decoders = {
		post(data) {
			data.message = 'ok';
			return data;
		}
	};
}

@provider
class ProviderEngineTestMiddlewareProvider extends Provider {
	static request = ProviderEngineTestDecodersProvider.request({
		engine: makeProviderEngine(ProviderEngineTestDecodersProvider)
	});

	static decoders = {
		post(data) {
			data.error = false;
			return data;
		}
	};

	static middlewares = {
		fakeResponse({ctx}) {
			ctx.params.body.value = ctx.params.body.value.join('-');
		}
	}
}

describe('core/request/engine/provider', () => {
	const baseProvider = new ProviderEngineTestBaseProvider();
	const dataProvider = new ProviderEngineTestDataProvider();
	const jsonProvider = new ProviderEngineTestJSONProvider();
	const encodersProvider = new ProviderEngineTestDecodersProvider();
	const middlewareProvider = new ProviderEngineTestMiddlewareProvider();

	let
		api,
		logOptions,
		server;

	beforeAll(async () => {
		api = globalOpts.api;
		globalOpts.api = 'https://run.mocky.io';

		logOptions = await get('log');
		set('log', {patterns: []});

		server = createServer();
	});

	afterAll((done) => {
		globalOpts.api = api;
		set('log', logOptions);

		server.close(done);
	});

	it('base URLs concatenation', async () => {
		try {
			const req = await baseProvider.get();

			expect(req).toBe(undefined);
		} catch(err) {
			expect(err.details.response.status).toBe(404);
		}

		const req = await dataProvider.get();

		expect(req.response.status).toBe(200);
	});

	it('response type is correct for XML', async () => {
		expect((await dataProvider.get()).data.querySelector('foo').textContent)
			.toBe('Hello world');
	});

	it('methods mapping', async () => {
		expect((await jsonProvider.peek()).data)
			.toEqual({id: 1, value: 'things'});
	});

	it('encoders/decoders', async () => {
		const req = await encodersProvider.post({
			value: 'abc-def-ghi'
		});

		expect(req.data)
			.toEqual({message: 'ok'});

		expect(req.response.status)
			.toBe(201);

		expect(req.response.ok)
			.toBeTrue();
	});

	it('middlewares', async () => {
		const req = await middlewareProvider.post({
			value: ['abc', 'def', 'ghi']
		});

		expect(req.data)
			.toEqual({message: 'ok', error: false});

		expect(req.response.status)
			.toBe(201);
	});
});

function createServer() {
	const
		serverApp = express();

	serverApp.use(express.json());

	serverApp.get('/data', (req, res) => {
		res.type('text/xml');
		res.status(200).send('<foo>Hello world</foo>');
	});

	serverApp.get('/data/json', (req, res) => {
		res.status(200).json({id: 1, value: 'things'});
	});

	serverApp.post('/data/json', (req, res) => {
		const
			{body} = req;

		if (body.id === 12345 && body.value === 'abc-def-ghi') {
			res.status(201).json({message: 'Success'});

		} else {
			res.sendStatus(422);
		}
	});

	return serverApp.listen(3000);
}