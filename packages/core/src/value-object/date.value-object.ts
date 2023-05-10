import { EmptyDateValueError } from '../error/empty-date-value.error';
import { InvalidDateValueTypeError } from '../error/invalid-date-value-type.error';

export abstract class DateValueObject {
	readonly value: Date;

	constructor(value: Date, property?: string) {
		DateValueObject.notEmpty(value, property);
		DateValueObject.allowedValue(value, property);
		this.value = value;
	}

	private static allowedValue(value: unknown, property?: string) {
		if (!(value instanceof Date)) {
			throw new InvalidDateValueTypeError(property);
		}
	}

	private static notEmpty(value: unknown, property?: string) {
		if (value === null || value === undefined) {
			throw new EmptyDateValueError(property);
		}
	}

	isAfterThan(other: DateValueObject): boolean {
		return this.value.valueOf() > other.value.valueOf();
	}

	isBeforeThan(other: DateValueObject): boolean {
		return this.value.valueOf() < other.value.valueOf();
	}

	isEqualsTo(other: DateValueObject): boolean {
		return this.value.valueOf() === other.value.valueOf();
	}

	toString(): string {
		return this.value.toISOString();
	}
}