import { useTranslation } from "react-i18next";

export const useJobLabelandPlaceholder = () => {
	const { t } = useTranslation();

	const JOB_TITLE_PLACEHOLDER: string = t("newJobPosting.firstForm.jobTitlePlaceholder");
	const JOB_DESCRIPTION_PLACEHOLDER: string = t("newJobPosting.firstForm.jobDescription");
	const JOB_COUNTRIES_PLACEHOLDER: string = t("newJobPosting.secondForm.countriesPlaceholder");
	const JOB_CATEGORY_PLACEHOLDER: string = t("newJobPosting.secondForm.categoryPlaceholder");
	const JOB_POSITION_PLACEHOLDER: string = t("newJobPosting.secondForm.postitonPlaceholder");
	const JOB_EMPLOYMENT_TYPE_PLACEHOLDER: string = t(
		"newJobPosting.secondForm.employmentTypePlaceholder",
	);
	const JOB_AMOUNT_HOURS_PLACEHOLDER: string = t("newJobPosting.secondForm.hoursAmountPlaceholder");
	const JOB_TITLE_LABEL: string = t("newJobPosting.firstForm.inputLabel");
	const JOB_DESCRIPTION_LABEL: string = t("newJobPosting.firstForm.descriptionLabel");
	const JOB_COUNTRIES_LABEL: string = t("newJobPosting.secondForm.countriesLabel");
	const JOB_CATEGORY_LABEL: string = t("newJobPosting.secondForm.categoryLabel");
	const JOB_POSITION_LABEL: string = t("newJobPosting.secondForm.positionLabel");
	const JOB_EMPLOYMENT_TYPE_LABEL: string = t("newJobPosting.secondForm.employmentTypeLabel");
	const JOB_AMOUNT_HOURS_LABEL: string = t("newJobPosting.secondForm.hoursAmountLabel");
};
