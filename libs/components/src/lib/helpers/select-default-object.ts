import { SelectOptions } from "utils/select-options/options";

export type DefaultObject = (
	storedString: string | undefined,
	options: SelectOptions[],
) => SelectOptions | undefined;

export const selectDefaultObject: DefaultObject = (
	storedString: string | undefined,
	options: SelectOptions[],
) => options.find(option => option.label === storedString);
