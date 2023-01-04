import { InstObject } from "redux/jobs";
import { SelectOptions } from "utils/select-options/options";

export const setRemoteArray = (remoteArray?: InstObject[], options?: SelectOptions[]) =>
	options?.filter(option => {
		return remoteArray && remoteArray.some(item => item.name === option?.label);
	});
