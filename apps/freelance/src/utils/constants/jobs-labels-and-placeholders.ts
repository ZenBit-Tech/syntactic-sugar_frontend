import { useTranslation } from "react-i18next";

interface IUseJobLabelAndPlaceholder {
	JOB_TITLE_PLACEHOLDER: string;
	JOB_DESCRIPTION_PLACEHOLDER: string;
	JOB_COUNTRIES_PLACEHOLDER: string;
	JOB_CATEGORY_PLACEHOLDER: string;
	JOB_POSITION_PLACEHOLDER: string;
	JOB_EMPLOYMENT_TYPE_PLACEHOLDER: string;
	JOB_AMOUNT_HOURS_PLACEHOLDER: string;
	JOB_WORK_EXPERIANCE_PLACEHOLDER: string;
	JOB_HOUR_RATE_PLACEHOLDER: string;
	JOB_SKILLS_PLACEHOLDER: string;
	JOB_ENGLISH_LEVEL_PLACEHOLDER: string;
	JOB_OTHER_REQUIRENMENTS_PLACEHOLDER: string;
	JOB_TITLE_LABEL: string;
	JOB_DESCRIPTION_LABEL: string;
	JOB_COUNTRIES_LABEL: string;
	JOB_CATEGORY_LABEL: string;
	JOB_POSITION_LABEL: string;
	JOB_EMPLOYMENT_TYPE_LABEL: string;
	JOB_AMOUNT_HOURS_LABEL: string;
	JOB_WORK_EXPERIANCE_LABEL: string;
	JOB_HOUR_RATE_LABEL: string;
	JOB_SKILLS_LABEL: string;
	JOB_ENGLISH_LEVEL_LABEL: string;
	JOB_OTHER_REQUIRENMENTS_LABEL: string;
}

export const useJobLabelAndPlaceholder = (): IUseJobLabelAndPlaceholder => {
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
	const JOB_WORK_EXPERIANCE_PLACEHOLDER: string = t(
		"newJobPosting.secondForm.workExperiencePlaceholder",
	);
	const JOB_HOUR_RATE_PLACEHOLDER: string = t("newJobPosting.secondForm.hourRatePlaceholder");
	const JOB_SKILLS_PLACEHOLDER: string = t("newJobPosting.thirdForm.skillsPlaceholder");
	const JOB_ENGLISH_LEVEL_PLACEHOLDER: string = t(
		"newJobPosting.thirdForm.englishLevelPlaceholder",
	);
	const JOB_OTHER_REQUIRENMENTS_PLACEHOLDER: string = t(
		"newJobPosting.thirdForm.otherRequirenmentsLabel",
	);
	const JOB_TITLE_LABEL: string = t("newJobPosting.firstForm.inputLabel");
	const JOB_DESCRIPTION_LABEL: string = t("newJobPosting.firstForm.descriptionLabel");
	const JOB_COUNTRIES_LABEL: string = t("newJobPosting.secondForm.countriesLabel");
	const JOB_CATEGORY_LABEL: string = t("newJobPosting.secondForm.categoryLabel");
	const JOB_POSITION_LABEL: string = t("newJobPosting.secondForm.positionLabel");
	const JOB_EMPLOYMENT_TYPE_LABEL: string = t("newJobPosting.secondForm.employmentTypeLabel");
	const JOB_AMOUNT_HOURS_LABEL: string = t("newJobPosting.secondForm.hoursAmountLabel");
	const JOB_WORK_EXPERIANCE_LABEL: string = t("newJobPosting.secondForm.workExperienceLabel");
	const JOB_HOUR_RATE_LABEL: string = t("newJobPosting.secondForm.hourRateLabel");
	const JOB_SKILLS_LABEL: string = t("newJobPosting.thirdForm.skillsLabel");
	const JOB_ENGLISH_LEVEL_LABEL: string = t("newJobPosting.thirdForm.englishLevelLabel");
	const JOB_OTHER_REQUIRENMENTS_LABEL: string = t(
		"newJobPosting.thirdForm.otherRequirenmentsLabel",
	);

	return {
		JOB_TITLE_PLACEHOLDER,
		JOB_DESCRIPTION_PLACEHOLDER,
		JOB_COUNTRIES_PLACEHOLDER,
		JOB_CATEGORY_PLACEHOLDER,
		JOB_POSITION_PLACEHOLDER,
		JOB_EMPLOYMENT_TYPE_PLACEHOLDER,
		JOB_AMOUNT_HOURS_PLACEHOLDER,
		JOB_WORK_EXPERIANCE_PLACEHOLDER,
		JOB_HOUR_RATE_PLACEHOLDER,
		JOB_SKILLS_PLACEHOLDER,
		JOB_ENGLISH_LEVEL_PLACEHOLDER,
		JOB_OTHER_REQUIRENMENTS_PLACEHOLDER,
		JOB_TITLE_LABEL,
		JOB_DESCRIPTION_LABEL,
		JOB_COUNTRIES_LABEL,
		JOB_CATEGORY_LABEL,
		JOB_POSITION_LABEL,
		JOB_EMPLOYMENT_TYPE_LABEL,
		JOB_AMOUNT_HOURS_LABEL,
		JOB_WORK_EXPERIANCE_LABEL,
		JOB_HOUR_RATE_LABEL,
		JOB_SKILLS_LABEL,
		JOB_ENGLISH_LEVEL_LABEL,
		JOB_OTHER_REQUIRENMENTS_LABEL,
	};
};
