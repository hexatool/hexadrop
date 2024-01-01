import { InvalidArgumentError } from '@hexadrop/error';

export class InvalidBooleanValueTypeError extends InvalidArgumentError {
	constructor(property = 'BooleanValueObject') {
		super(
			`${property} must only contains boolean values`,
			'InvalidBooleanValueTypeError',
			'HEX(400)'
		);
	}
}