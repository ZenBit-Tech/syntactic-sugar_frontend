import { SubmitHandler } from "react-hook-form";

export interface IJobPostingFirstForm {
	title: string;
	description: string;
}

export interface IUseJobPostingFirstForm {
	onSubmit: SubmitHandler<IJobPostingFirstForm>;
}
