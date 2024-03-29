import UuiiValueObject from './uuii.value-object';

class ExtendsUuiiValueObject extends UuiiValueObject {}

export default class UuiiValueObjectMother {
	static create(value: string): UuiiValueObject {
		return new ExtendsUuiiValueObject(value);
	}

	static invalid(): UuiiValueObject {
		return UuiiValueObjectMother.create('s');
	}

	static random(): UuiiValueObject {
		const value = crypto.randomUUID();

		return UuiiValueObjectMother.create(value);
	}
}
