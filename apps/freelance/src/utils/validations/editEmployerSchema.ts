import { object, SchemaOf, string } from "yup";
import { IEditEmployerForm } from "@freelance/components";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";

export const useEditEmployerSchema = (): SchemaOf<IEditEmployerForm> => {
	const {
		FIELD_REQUIRED,
		MESSAGE_JOB_TITLE_MAX_CHAR,
		CORRECT_PHONE,
		MIN_TWELVE_CHAR,
		MESSAGE_DESCRIPTION_MAX_CHAR,
		MESSAGE_DESCRIPTION_MIN_CHAR,
		WEBSITE_ERROR_MESSAGE,
		LINKED_IN_ERROR_MESSAGE,
	} = useJobsValidationErrorMessages();

	return object({
		fullName: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		position: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		companyName: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		phone: string()
			.required(FIELD_REQUIRED)
			.max(50, MESSAGE_JOB_TITLE_MAX_CHAR)
			.min(12, MIN_TWELVE_CHAR)
			.matches(/^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}/gm, CORRECT_PHONE),
		linkedIn: string()
			.max(50, MESSAGE_JOB_TITLE_MAX_CHAR)
			.required(FIELD_REQUIRED)
			.matches(
				/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm,
				LINKED_IN_ERROR_MESSAGE,
			),
		website: string()
			.max(50, MESSAGE_JOB_TITLE_MAX_CHAR)
			.required(FIELD_REQUIRED)
			.matches(/(^http[s]?:\/{2})|(^www)|(^\/{1,2})/gim, WEBSITE_ERROR_MESSAGE),
		aboutUs: string()
			.required(FIELD_REQUIRED)
			.min(100, MESSAGE_DESCRIPTION_MIN_CHAR)
			.max(600, MESSAGE_DESCRIPTION_MAX_CHAR),
	});
};
