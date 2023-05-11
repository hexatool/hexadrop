import type { Clazz } from '@hexadrop/types';

export abstract class Command {
	static COMMAND_NAME: string;
	readonly commandId: string;
	readonly commandName: string;
	readonly relatedId: string | undefined;

	protected constructor(commandName: string, commandId: string, relatedId?: string) {
		this.commandId = commandId;
		this.commandName = commandName;
		this.relatedId = relatedId;
	}
}

export type CommandClass<C extends Command> = Clazz<C> & {
	COMMAND_NAME: string;
};
