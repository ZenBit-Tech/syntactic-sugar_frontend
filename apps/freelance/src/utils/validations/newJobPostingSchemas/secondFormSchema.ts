import { array, object, SchemaOf, string } from "yup";
import { IJobPostingSecondForm } from "@freelance/components";
import { useTranslation } from "react-i18next";

export const useSecondFormSchema = (): SchemaOf<IJobPostingSecondForm> => {
	const { t } = useTranslation();

	const maxCountries: string = t("newJobPosting.secondForm.validation.maxCountries");
	const fieldRequired: string = t("newJobPosting.validation.messageFieldRequired");

	return object({
		countries: array(object({ value: string(), label: string() }))
			.max(5, maxCountries)
			.required(fieldRequired),
		category: object({ value: string(), label: string() }).required(fieldRequired),
		position: string().required(fieldRequired),
		employmentType: object({ value: string(), label: string() }).required(fieldRequired),
		availableAmountOfHours: object({ value: string(), label: string() }).required(fieldRequired),
		workExperience: object({ value: string(), label: string() }).required(fieldRequired),
		hourRate: object({ value: string(), label: string() }).required(fieldRequired),
	});
};
