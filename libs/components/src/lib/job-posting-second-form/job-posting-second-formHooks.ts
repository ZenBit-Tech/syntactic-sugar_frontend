import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CREATE_NEW_JOB_THIRD_PAGE } from "utils/constants/links";
import { IJobPostingSecondForm, IUseJobPostingSecondForm } from "./interfaces";

export const useJobPostingSecondFormHook = (): IUseJobPostingSecondForm => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	const countreisLabel: string = t("newJobPosting.secondForm.countriesLabel");
	const countriesPlaceholder: string = t("newJobPosting.secondForm.countriesPlaceholder");
	const categoryLabel: string = t("newJobPosting.secondForm.categoryLabel");
	const categoryPlaceholder: string = t("newJobPosting.secondForm.categoryPlaceholder");
	const positionLabel: string = t("newJobPosting.secondForm.positionLabel");
	const postitonPlaceholder: string = t("newJobPosting.secondForm.postitonPlaceholder");
	const employmentTypeLabel: string = t("newJobPosting.secondForm.employmentTypeLabel");
	const employmentTypePlaceholder: string = t("newJobPosting.secondForm.employmentTypePlaceholder");
	const hoursAmountLabel: string = t("newJobPosting.secondForm.hoursAmountLabel");
	const hoursAmountPlaceholder: string = t("newJobPosting.secondForm.hoursAmountPlaceholder");
	const workExperienceLabel: string = t("newJobPosting.secondForm.workExperienceLabel");
	const workExperiencePlaceholder: string = t("newJobPosting.secondForm.workExperiencePlaceholder");
	const hourRateLabel: string = t("newJobPosting.secondForm.hourRateLabel");
	const hourRatePlaceholder: string = t("newJobPosting.secondForm.hourRatePlaceholder");

	const onSubmit: SubmitHandler<IJobPostingSecondForm> = data => {
		console.log(data);
		navigate(CREATE_NEW_JOB_THIRD_PAGE);
	};

	return {
		countreisLabel,
		countriesPlaceholder,
		categoryLabel,
		categoryPlaceholder,
		positionLabel,
		postitonPlaceholder,
		employmentTypeLabel,
		employmentTypePlaceholder,
		hoursAmountLabel,
		hoursAmountPlaceholder,
		workExperienceLabel,
		workExperiencePlaceholder,
		hourRateLabel,
		hourRatePlaceholder,
		onSubmit,
	};
};
