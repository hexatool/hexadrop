import { StringValueObject } from '../../../../src';
import { WordMother } from '../../../../src/test';

export class FakeStringValueObject extends StringValueObject {
    constructor(value: string) {
        super(value);
    }

}

export class InvalidNumberStringValueObject extends StringValueObject {
    constructor() {
        // @ts-ignore
        super(1);
    }
}

export class InvalidStringValueObject extends StringValueObject<'sandia' | 'pera'> {
    constructor() {
        // @ts-ignore
        super('melon', ['sandia', 'pera']);
    }
}

export class UndefinedStringStringValueObject extends StringValueObject {
    constructor() {
        // @ts-ignore
        super(undefined);
    }
}

export class StringValueObjectMother {
    static create(value: string): StringValueObject {
        return new FakeStringValueObject(value);
    }

    static creator() {
        return () => StringValueObjectMother.random();
    }

    static random() {
        const value = WordMother.random();
        return this.create(value);
    }

    static invalidWithNumber() {
        return new InvalidNumberStringValueObject();
    }

    static invalidWithUndefined() {
        return new UndefinedStringStringValueObject();
    }

    static invalidValue() {
        return new InvalidStringValueObject();
    }
}
