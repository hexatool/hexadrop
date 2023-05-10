import { WordMother } from '@hexadrop/mother';

import { InvalidNumberValueTypeError } from '../../../src/error/invalid-number-value-type.error';

export class InvalidNumberValueTypeErrorMother {
	static create(property?: string): InvalidNumberValueTypeError {
		return new InvalidNumberValueTypeError(property);
	}

	static random(): InvalidNumberValueTypeError {
		const property = WordMother.random();

		return this.create(property);
	}

	static randomWithoutProperty(): InvalidNumberValueTypeError {
		return this.create();
	}
}