import { InstObject } from "redux/jobs";
import { SelectOptions } from "utils/select-options/options";

export type DefaultArray = (
	storedArray?: string[],
	options?: SelectOptions[],
) => SelectOptions[] | undefined;

export const selectDefaultArray: DefaultArray = (
	storedArray?: string[],
	options?: SelectOptions[],
) =>
	options?.filter(option => {
		return storedArray && storedArray.filter(item => item === option?.label).length > 0;
	});
