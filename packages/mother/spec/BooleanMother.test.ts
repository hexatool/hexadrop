import { describe, expect, test } from 'vitest';
import { BooleanMother } from '../src';

describe('BooleanMother', () => {
	test('should works as expected', async () => {
		const value = BooleanMother.random();
		expect(value).toBeDefined();
		expect(typeof value).toBe('boolean');
	});
});
