import { InstObject } from "redux/jobs";
import { SelectOptions } from "utils/select-options/options";

export type DefaultObject = (
	storedString?: string,
	options?: SelectOptions[],
) => SelectOptions | undefined;

export const selectDefaultObject: DefaultObject = (
	storedString?: string,
	options?: SelectOptions[],
) => options?.find(option => option.label === storedString);

export const setRemoteObject = (storedObject?: InstObject, options?: SelectOptions[]) =>
	options?.find(option => option.label === storedObject?.name);
