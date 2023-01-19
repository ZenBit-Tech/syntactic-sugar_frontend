import { object, SchemaOf, string } from "yup";
import { IEditEmployerForm } from "@freelance/components";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";

export const useEditEmployerSchema = (): SchemaOf<IEditEmployerForm> => {
	const { FIELD_REQUIRED, MESSAGE_JOB_TITLE_MAX_CHAR, CORRECT_PHONE, MIN_TWELVE_CHAR } =
		useJobsValidationErrorMessages();

	return object({
		fullName: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		position: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		companyName: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		phone: string()
			.max(50, MESSAGE_JOB_TITLE_MAX_CHAR)
			.min(12, MIN_TWELVE_CHAR)
			.matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, CORRECT_PHONE)
			.required(FIELD_REQUIRED),
		linkedIn: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		website: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		aboutUs: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
	});
};
