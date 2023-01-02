import { SubmitHandler } from "react-hook-form";
import { SelectOptions } from "utils/select-options/options";

export interface IJobPostingSecondForm {
	countries: SelectOptions[];
	category: SelectOptions;
	position: string;
	employmentType: SelectOptions;
	availableAmountOfHours: SelectOptions;
	workExperience: SelectOptions;
	hourRate: SelectOptions;
}

export interface IUseJobPostingSecondForm {
	onSubmit: SubmitHandler<IJobPostingSecondForm>;
}
