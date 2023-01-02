import { object, SchemaOf, string } from "yup";
import { IJobPostingFirstForm } from "@freelance/components";
import { useJobsValidationErrorMessages } from "src/utils/constants/jobs-validation-error-messages";

export const useFirstFormSchema = (): SchemaOf<IJobPostingFirstForm> => {
	const { FIELD_REQUIRED, MESSAGE_JOB_TITLE_MAX_CHAR, MESSAGE_DESCRIPTION_MAX_CHAR } =
		useJobsValidationErrorMessages();

	return object({
		title: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		description: string().max(600, MESSAGE_DESCRIPTION_MAX_CHAR).required(FIELD_REQUIRED),
	});
};
