import DomainEvent from '@hexadrop/event';
import type { Primitives } from '@hexadrop/types/primitives';
import { describe, expect, test } from 'bun:test';

import AggregateRoot from './aggregate-root';

class MockEvent extends DomainEvent {
	static override EVENT_NAME = 'event';

	constructor(
		readonly foo: string,
		aggregateId: string
	) {
		super(MockEvent.EVENT_NAME, aggregateId);
	}
}

class MockAggregateRoot extends AggregateRoot {
	readonly value: string;
	constructor(primitives: Primitives<MockAggregateRoot>) {
		super();
		this.value = primitives.value;
	}

	override toPrimitives(): Primitives<MockAggregateRoot> {
		return {
			value: this.value,
		};
	}
}

describe('AggregateRoot', () => {
	describe('record() and pullDomainEvents()', () => {
		test('should works as expected', () => {
			const event1 = new MockEvent('afa', '1');
			const event2 = new MockEvent('afa2', '1');
			const event3 = new MockEvent('afa3', '1');
			const entity = new MockAggregateRoot({ value: 'value' });

			entity.record(event1, event2);

			const pulled = entity.pullDomainEvents();

			expect(pulled).toStrictEqual([event1, event2]);

			const pulled2 = entity.pullDomainEvents();

			expect(pulled2).toStrictEqual([]);

			entity.record(event3);

			const pulled3 = entity.pullDomainEvents();

			expect(pulled3).toStrictEqual([event3]);
		});
	});
});
