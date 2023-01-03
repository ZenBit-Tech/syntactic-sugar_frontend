import { array, object, SchemaOf, string } from "yup";
import { IJobPostingThirdForm } from "@freelance/components";
import { useJobsValidationErrorMessages } from "src/utils/constants/jobs-validation-error-messages";

export const useThirdFormSchema = (): SchemaOf<IJobPostingThirdForm> => {
	const { FIELD_REQUIRED, MAX_SKILLS, MESSAGE_DESCRIPTION_MAX_CHAR } =
		useJobsValidationErrorMessages();

	return object({
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
