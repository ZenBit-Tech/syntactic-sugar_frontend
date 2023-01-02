import { SubmitHandler } from "react-hook-form";
import { SelectOptions } from "utils/select-options/options";

export interface IJobPostingThirdForm {
	skills: SelectOptions[];
	englishLevel: SelectOptions;
	otherRequirenments: string;
}

export interface IUseJobPostingThirdForm {
	isLoading: boolean;
	onSubmit: SubmitHandler<IJobPostingThirdForm>;
}
