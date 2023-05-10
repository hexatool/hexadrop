import { describe, expect, test } from 'vitest';

import type { Clazz } from '../../src';
import { Query } from '../../src';
import { MockQueryBus } from '../../src/test';

class Query1Response {
	constructor(readonly foo: string) {}
}

class Query1 extends Query<Query1Response> {
	static override QUERY_NAME = 'Query1';

	constructor() {
		super(Query1.QUERY_NAME);
	}

	override get response(): Clazz<Query1Response> {
		return Query1Response;
	}
}

class Query2Response {
	constructor(readonly bar: string) {}
}

class Query2 extends Query<Array<Query2Response>> {
	static override QUERY_NAME = 'Query2';

	constructor() {
		super(Query2.QUERY_NAME);
	}

	override get response(): Clazz<Array<Query2Response>> {
		return Array<Query2Response>;
	}
}

describe('MockQueryBus', () => {
	test('should assertLastPublishedQuery works as expected', async () => {
		const query1 = new Query1();
		const query2 = new Query2();
		const bus = new MockQueryBus();

		await bus.ask(query1);
		await bus.ask(query2);

		expect(() => bus.assertLastAskedQuery(query1)).toThrow();
		expect(() => bus.assertLastAskedQuery(query2)).not.toThrow();
	});
	test('should assertLastPublishedQuery works as expected', async () => {
		const query1 = new Query1();
		const query2 = new Query2();
		const bus = new MockQueryBus();

		await bus.ask(query1);
		await bus.ask(query2);

		expect(() => bus.assertAskedQueries(query1)).toThrow();
		expect(() => bus.assertAskedQueries(query1, query2)).not.toThrow();
	});
	test('should assertNotPublishedQuery works as expected', async () => {
		const query1 = new Query1();
		const query2 = new Query2();
		const bus = new MockQueryBus();

		expect(() => bus.assertNotAskedQuery()).not.toThrow();

		await bus.ask(query1);
		await bus.ask(query2);

		expect(() => bus.assertNotAskedQuery()).toThrow();
	});
});