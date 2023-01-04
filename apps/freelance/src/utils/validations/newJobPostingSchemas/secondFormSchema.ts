import { array, object, SchemaOf, string } from "yup";
import { IJobPostingSecondForm } from "@freelance/components";
import { useJobsValidationErrorMessages } from "src/utils/constants/jobs-validation-error-messages";

export const useSecondFormSchema = (): SchemaOf<IJobPostingSecondForm> => {
	const { FIELD_REQUIRED, MAX_COUNTRIES } = useJobsValidationErrorMessages();

	return object({
		countries: array(object({ value: string(), label: string() }))
			.max(5, MAX_COUNTRIES)
			.min(1, FIELD_REQUIRED),
		category: object({
			value: string().required(FIELD_REQUIRED),
			label: string().required(FIELD_REQUIRED),
		}),
		position: string().required(FIELD_REQUIRED),
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
	});
};
