import { SubmitHandler } from "react-hook-form";
import { SelectOptions } from "utils/select-options/options";

export interface IJobPostingThirdForm {
	skills: SelectOptions[];
	englishLevel: SelectOptions;
	otherRequirenments: string;
}

export interface IUseJobPostingThirdForm {
	skillsLabel: string;
	skillsPlaceholder: string;
	englishLevelLabel: string;
	englishLevelPlaceholder: string;
	otherRequirenmentsLabel: string;
	otherRequirenmentsPlaceholder: string;
	fieldRequired: string;
	onSubmit: SubmitHandler<IJobPostingThirdForm>;
}
