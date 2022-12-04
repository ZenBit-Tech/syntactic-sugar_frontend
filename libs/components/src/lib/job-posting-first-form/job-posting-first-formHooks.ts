import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CREATE_NEW_JOB_SECOND_PAGE } from "utils/constants/links";
import { IJobPostingFirstForm, IUseJobPostingFirstForm } from "./interfaces";

export const useJobPostingFirstFormHook = (): IUseJobPostingFirstForm => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	const jobTitlePlaceholder: string = t("newJobPosting.firstForm.jobTitlePlaceholder");
	const jobDescriptionPlaceholder: string = t("newJobPosting.firstForm.jobDescription");
	const inputLabel: string = t("newJobPosting.firstForm.inputLabel");
	const descriptionLabel: string = t("newJobPosting.firstForm.descriptionLabel");

	const onSubmit: SubmitHandler<IJobPostingFirstForm> = data => {
		console.log(data);
		navigate(CREATE_NEW_JOB_SECOND_PAGE);
	};

	return {
		jobTitlePlaceholder,
		jobDescriptionPlaceholder,
		inputLabel,
		descriptionLabel,
		onSubmit,
	};
};
