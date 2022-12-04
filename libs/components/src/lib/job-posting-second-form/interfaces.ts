import { SubmitHandler } from "react-hook-form";
import { SelectOptions } from "utils/select-options/options";

export interface IJobPostingSecondForm {
	countries: SelectOptions[];
	category: SelectOptions;
	position: string;
	employmentType: SelectOptions;
	availableAmountOfHour: SelectOptions;
	workExperience: SelectOptions;
	hourRate: SelectOptions;
}

export interface IUseJobPostingSecondForm {
	countreisLabel: string;
	countriesPlaceholder: string;
	categoryLabel: string;
	categoryPlaceholder: string;
	positionLabel: string;
	postitonPlaceholder: string;
	employmentTypeLabel: string;
	employmentTypePlaceholder: string;
	hoursAmountLabel: string;
	hoursAmountPlaceholder: string;
	workExperienceLabel: string;
	workExperiencePlaceholder: string;
	hourRateLabel: string;
	hourRatePlaceholder: string;
	onSubmit: SubmitHandler<IJobPostingSecondForm>;
}
