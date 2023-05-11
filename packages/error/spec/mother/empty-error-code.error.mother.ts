import { EmptyErrorCodeError } from '../../src';

export class EmptyErrorCodeErrorMother {
	static create(): EmptyErrorCodeError {
		return new EmptyErrorCodeError();
	}

	static random(): EmptyErrorCodeError {
		return this.create();
	}
}
