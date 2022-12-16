import { SelectOptions } from "utils/select-options/options";

export type DefaultArray = (storedCountries: string[], options: SelectOptions[]) => SelectOptions[];

export const selectDefaultArray: DefaultArray = (storedArray: string[], options: SelectOptions[]) =>
	options.filter(option => {
		return storedArray.filter(item => item === option.label).length > 0;
	});
