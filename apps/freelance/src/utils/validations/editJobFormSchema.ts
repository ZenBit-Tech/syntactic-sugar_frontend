import { object, string, array, SchemaOf } from "yup";
import { IEditJobForm } from "@freelance/components";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";

export const useEditJobFormSchema = (): SchemaOf<IEditJobForm> => {
	const {
		FIELD_REQUIRED,
		MESSAGE_JOB_TITLE_MAX_CHAR,
		MESSAGE_DESCRIPTION_MAX_CHAR,
		MAX_COUNTRIES,
		MAX_SKILLS,
	} = useJobsValidationErrorMessages();

	return object({
		title: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		description: string().max(600, MESSAGE_DESCRIPTION_MAX_CHAR).required(FIELD_REQUIRED),
		countries: array(object({ value: string(), label: string() }))
			.max(5, MAX_COUNTRIES)
			.min(1, FIELD_REQUIRED),
		category: object({
			value: string().required(FIELD_REQUIRED),
			label: string().required(FIELD_REQUIRED),
		}),
		position: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		employmentType: object({
			value: string().required(FIELD_REQUIRED),
			label: string().required(FIELD_REQUIRED),
		}),
		availableAmountOfHours: object({
			value: string().required(FIELD_REQUIRED),
			label: string().required(FIELD_REQUIRED),
		}),
		workExperience: object({
			value: string().required(FIELD_REQUIRED),
			label: string().required(FIELD_REQUIRED),
		}),
		hourRate: object({
			value: string().required(FIELD_REQUIRED),
			label: string().required(FIELD_REQUIRED),
		}),
		skills: array(
			object({
				value: string(),
				label: string(),
			}),
		)
			.max(3, MAX_SKILLS)
			.min(1, FIELD_REQUIRED),
		englishLevel: object({
			value: string().required(FIELD_REQUIRED),
			label: string().required(FIELD_REQUIRED),
		}),
		otherRequirenments: string().max(600, MESSAGE_DESCRIPTION_MAX_CHAR).required(FIELD_REQUIRED),
	});
};
