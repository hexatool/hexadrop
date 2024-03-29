import { PubSub, Topic } from '@google-cloud/pubsub';
import Either from '@hexadrop/either';
import type DomainError from '@hexadrop/error';

import EventBus from './bus';
import DomainEvent from './domain-event';

/**
 * PubSubEventBus is a class that extends the abstract EventBus class.
 * It provides PubSub implementation of the EventBus.
 *
 * @class
 * @extends {EventBus}
 */
export default class PubSubEventBus extends EventBus {
	private readonly topics = new Map<string, Topic>();

	/**
	 * Creates an instance of PubSubEventBus.
	 *
	 * @param {PubSub} pubSub - The PubSub instance to use.
	 */
	constructor(readonly pubSub: PubSub) {
		super();
	}

	/**
	 * @pubSub
	 * @param {...DomainEvent[]} events - The domain events to publish.
	 * @returns {Promise<Either<DomainError, void>>}
	 */
	async publish(...events: DomainEvent[]): Promise<Either<DomainError, void>> {
		const promises: Promise<string>[] = [];
		for (const e of events) {
			const fn = async () => {
				const topic = await this.getTopic(e);
				const data = Buffer.from(JSON.stringify(e));

				return topic.publishMessage({ data });
			};
			promises.push(fn());
		}

		await Promise.all(promises);

		return Either.right(undefined);
	}

	private async getTopic(e: DomainEvent): Promise<Topic> {
		const eventName = e.eventName;
		let topic = this.topics.get(eventName);
		if (topic) {
			return topic;
		}
		topic = this.pubSub.topic(eventName);
		const [exists] = await topic.exists();
		if (!exists) {
			await topic.create();
		}

		this.topics.set(eventName, topic);

		return topic;
	}
}
