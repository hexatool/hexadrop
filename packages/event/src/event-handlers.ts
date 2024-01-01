import type { EventBusCallback } from './bus';
import type { DomainEventClass } from './domain-event';
import DomainEvent from './domain-event';

/**
 * This is an abstract class named EventHandlers.
 * It provides a structure for handling events in the application.
 *
 * @abstract
 */
export default abstract class EventHandlers {
	/**
	 * This is an abstract method named 'search'.
	 * It is expected to be implemented by subclasses of EventHandlers.
	 * The method takes an event of type 'E' or 'DomainEventClass<E>' as an argument.
	 * 'E' is a generic parameter that extends 'DomainEvent'.
	 * The method should return an array of 'EventBusCallback<E>'.
	 *
	 * @abstract
	 * @param {E | DomainEventClass<E>} event - The event to be searched.
	 * @returns {EventBusCallback<E>[]} - The array of callback functions to be executed when the event is found.
	 */
	abstract search<E extends DomainEvent>(event: DomainEventClass<E> | E): EventBusCallback<E>[];
}
