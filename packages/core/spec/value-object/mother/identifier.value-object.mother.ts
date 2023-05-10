import { UuidMother } from '@hexadrop/mother';

import { IdentifierValueObject } from '../../../src';

class ExtendsIdentifierValueObject extends IdentifierValueObject {}

export class IdentifierValueObjectMother {
	static create(value: string): IdentifierValueObject {
		return new ExtendsIdentifierValueObject(value);
	}

	static invalid(): IdentifierValueObject {
		return this.create('s');
	}

	static random(): IdentifierValueObject {
		const value = UuidMother.random();

		return this.create(value);
	}
}