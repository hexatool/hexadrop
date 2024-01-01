import { InvalidArgumentError } from '@hexadrop/error';

export class EmptyDateValueError extends InvalidArgumentError {
	constructor(property = 'DateValueObject') {
		super(`${property} can not be null or empty`, 'EmptyDateValueError', 'HEX(400)');
	}
}