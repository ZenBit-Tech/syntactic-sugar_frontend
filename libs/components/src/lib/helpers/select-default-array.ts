import { SelectOptions } from "utils/select-options/options";

export type DefaultArray = (
	storedCountries: string[],
	options: SelectOptions[],
) => (SelectOptions | undefined)[];

export const selectDefaultArray: DefaultArray = (storedArray: string[], options: SelectOptions[]) =>
	storedArray.map((item: string) => options.find(option => option.label === item));
