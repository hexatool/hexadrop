import { describe, expect, test } from 'vitest';
import { WordMother } from '@hexadrop/mother';
import { EmptyNumberValueErrorMother } from './mother/EmptyNumberValueErrorMother';

describe('EmptyNumberValueError', () => {
	test('should create', () => {
		const expectedError = EmptyNumberValueErrorMother.create();
		expect(expectedError.message).toBe(`NumberValueObject can not be null or empty`);
		expect(expectedError.errorCode).toBe(400);
		expect(expectedError.code).toBe('HEX(400)');
		expect(expectedError.name).toBe('EmptyNumberValueError');
		expect(expectedError.stack).toBeDefined();
	});
	test('should create from property', () => {
		const property = WordMother.random();
		const expectedError = EmptyNumberValueErrorMother.create(property);
		expect(expectedError.message).toBe(`${property} can not be null or empty`);
		expect(expectedError.errorCode).toBe(400);
		expect(expectedError.code).toBe('HEX(400)');
		expect(expectedError.name).toBe('EmptyNumberValueError');
		expect(expectedError.stack).toBeDefined();
	});
});
