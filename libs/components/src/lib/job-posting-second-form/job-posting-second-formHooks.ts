import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "redux/example-hooks";
import { addNewJobInfo } from "redux/jobs";
import { CREATE_NEW_JOB_THIRD_PAGE } from "utils/constants/links";
import { IJobPostingSecondForm, IUseJobPostingSecondForm } from "@freelance/components";

export const useJobPostingSecondFormHook = (): IUseJobPostingSecondForm => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

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
	const fieldRequired: string = t("newJobPosting.validation.messageFieldRequired");

	const onSubmit: SubmitHandler<IJobPostingSecondForm> = data => {
		const resultData = {
			countries: data.countries.map(country => country.label),
			category: data.category.label,
			position: data.position,
			employmentType: data.employmentType.label,
			availableAmountOfHours: data.availableAmountOfHours.label,
			hourRate: data.hourRate.label,
			workExperience: data.workExperience.label,
		};

		dispatch(addNewJobInfo(resultData));
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
		fieldRequired,
		onSubmit,
	};
};
