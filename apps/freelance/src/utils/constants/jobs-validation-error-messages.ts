import { useTranslation } from "react-i18next";

interface IUseJobValidationErrorMessages {
	FIELD_REQUIRED: string;
	MESSAGE_JOB_TITLE_MAX_CHAR: string;
	MESSAGE_DESCRIPTION_MAX_CHAR: string;
	MAX_COUNTRIES: string;
	MAX_SKILLS: string;
	SERVER_ERROR_MESSAGE: string;
	CORRECT_PHONE: string;
	MIN_TWELVE_CHAR: string;
}

export const useJobsValidationErrorMessages = (): IUseJobValidationErrorMessages => {
	const { t } = useTranslation();

	const INPUT_CHAR_NUMBER: number = 50;
	const TEXTAREA_CHAR_NUMBER: number = 600;
	const FIELD_REQUIRED: string = t("newJobPosting.validation.messageFieldRequired");
	const MESSAGE_JOB_TITLE_MAX_CHAR: string = t(
		"newJobPosting.firstForm.validation.messageJobTitleMaxChar",
		{ INPUT_CHAR_NUMBER },
	);
	const MESSAGE_DESCRIPTION_MAX_CHAR: string = t(
		"newJobPosting.firstForm.validation.messageDescriptionMaxChar",
		{ TEXTAREA_CHAR_NUMBER },
	);
	const MAX_COUNTRIES: string = t("newJobPosting.secondForm.validation.maxCountries");
	const MAX_SKILLS: string = t("newJobPosting.thirdForm.validation.maxSkills");
	const CORRECT_PHONE: string = t("dashboard.correctPhone");
	const MIN_TWELVE_CHAR: string = t("dashboard.minTwelveChar");

	const SERVER_ERROR_MESSAGE: string = t("serverErrorMessage");

	return {
		FIELD_REQUIRED,
		MESSAGE_JOB_TITLE_MAX_CHAR,
		MESSAGE_DESCRIPTION_MAX_CHAR,
		MAX_COUNTRIES,
		MAX_SKILLS,
		SERVER_ERROR_MESSAGE,
		CORRECT_PHONE,
		MIN_TWELVE_CHAR,
	};
};
