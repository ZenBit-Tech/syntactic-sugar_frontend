import { object, SchemaOf, string } from "yup";
import { IEditEmployerForm } from "@freelance/components";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";

export const useEditEmployerSchema = (): SchemaOf<IEditEmployerForm> => {
	const {
		FIELD_REQUIRED,
		MESSAGE_JOB_TITLE_MAX_CHAR,
		MESSAGE_DESCRIPTION_MAX_CHAR,
		MAX_COUNTRIES,
		MAX_SKILLS,
	} = useJobsValidationErrorMessages();

	return object({
		fullName: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		position: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		companyName: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		phone: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		linkedIn: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		website: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
		aboutUs: string().max(50, MESSAGE_JOB_TITLE_MAX_CHAR).required(FIELD_REQUIRED),
	});
};
