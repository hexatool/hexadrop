import { MotherCreator } from './MotherCreator';

export class IntegerMother {
	static random(min?: number, max?: number): number {
		// @ts-ignore
		return MotherCreator.random().datatype.number({ max, min });
	}
}
