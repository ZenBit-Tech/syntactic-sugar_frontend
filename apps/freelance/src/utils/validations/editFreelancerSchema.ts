import { array, object, SchemaOf, string } from "yup";
import { IEditFreelancerForm } from "@freelance/components";
import { useJobsValidationErrorMessages } from "../constants/jobs-validation-error-messages";

export const useEditFreelancerSchema = (): SchemaOf<IEditFreelancerForm> => {
	const { FIELD_REQUIRED, MESSAGE_JOB_TITLE_MAX_CHAR, MESSAGE_DESCRIPTION_MAX_CHAR, MAX_SKILLS } =
		useJobsValidationErrorMessages();

	return object({
		fullName: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		position: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		category: object({
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
		employmentType: object({
			value: string().required(FIELD_REQUIRED),
			label: string().required(FIELD_REQUIRED),
		}),
		country: object({
			value: string().required(FIELD_REQUIRED),
			label: string().required(FIELD_REQUIRED),
		}),
		hourRate: object({
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
		englishLevel: object({
			value: string().required(FIELD_REQUIRED),
			label: string().required(FIELD_REQUIRED),
		}),
		education: array(
			object({
				id: string(),
				institute: string().required(FIELD_REQUIRED),
				occupation: string().required(FIELD_REQUIRED),
				period: string().required(FIELD_REQUIRED),
			}),
		).max(3, MAX_SKILLS),
		workHistory: array(
			object({
				id: string(),
				company: string().required(FIELD_REQUIRED),
				workPosition: string().required(FIELD_REQUIRED),
				period: string().required(FIELD_REQUIRED),
			}),
		).max(3, MAX_SKILLS),
		otherExperience: string().max(600, MESSAGE_DESCRIPTION_MAX_CHAR).required(FIELD_REQUIRED),
	});
};
