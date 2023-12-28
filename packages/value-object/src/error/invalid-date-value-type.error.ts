import { InvalidArgumentError } from '@hexadrop/error';

export class InvalidDateValueTypeError extends InvalidArgumentError {
	constructor(property = 'DateValueObject') {
		super(
			`${property} must only contains date values`,
			'InvalidDateValueTypeError',
			'HEX(400)'
		);
	}
}