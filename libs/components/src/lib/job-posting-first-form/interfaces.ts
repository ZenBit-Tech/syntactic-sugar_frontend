import { SubmitHandler } from "react-hook-form";

export interface IJobPostingFirstForm {
	title: string;
	description: string;
}

export interface IUseJobPostingFirstForm {
	jobTitlePlaceholder: string;
	jobDescriptionPlaceholder: string;
	inputLabel: string;
	descriptionLabel: string;
	onSubmit: SubmitHandler<IJobPostingFirstForm>;
}
