import { array, object, SchemaOf, string } from "yup";
import { useTranslation } from "react-i18next";
import { IJobPostingSecondForm } from "@freelance/components";

export const useSecondFormSchema = (): SchemaOf<IJobPostingSecondForm> => {
	const { t } = useTranslation();

	const maxCountries: string = t("newJobPosting.secondForm.validation.maxCountries");
	const fieldRequired: string = t("newJobPosting.validation.messageFieldRequired");

	return object({
		countries: array(object({ value: string(), label: string() }))
			.max(5, maxCountries)
			.min(1, fieldRequired),
		category: object({
			value: string().required(fieldRequired),
			label: string().required(fieldRequired),
		}),
		position: string().required(fieldRequired),
		employmentType: object({
			value: string().required(fieldRequired),
			label: string().required(fieldRequired),
		}),
		availableAmountOfHours: object({
			value: string().required(fieldRequired),
			label: string().required(fieldRequired),
		}),
		workExperience: object({
			value: string().required(fieldRequired),
			label: string().required(fieldRequired),
		}),
		hourRate: object({
			value: string().required(fieldRequired),
			label: string().required(fieldRequired),
		}),
	});
};
