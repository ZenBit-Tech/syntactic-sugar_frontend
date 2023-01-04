import { InstObject } from "redux/jobs";
import { SelectOptions } from "utils/select-options/options";

type RemoteObject = (
	storedObject?: InstObject,
	options?: SelectOptions[],
) => SelectOptions | undefined;

export const setRemoteObject: RemoteObject = (
	storedObject?: InstObject,
	options?: SelectOptions[],
) => options?.find(option => option.label === storedObject?.name);
