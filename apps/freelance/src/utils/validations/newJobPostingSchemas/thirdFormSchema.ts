import { array, object, SchemaOf, string } from "yup";
import { IJobPostingThirdForm } from "@freelance/components";
import { useTranslation } from "react-i18next";

export const useThirdFormSchema = (): SchemaOf<IJobPostingThirdForm> => {
	const { t } = useTranslation();

	const maxSkills = t("newJobPosting.thirdForm.validation.maxSkills");
	const fieldRequired = t("newJobPosting.validation.messageFieldRequired");

	return object({
		skills: array(object({ value: string(), label: string() }))
			.max(3, maxSkills)
			.required(fieldRequired),
		englishLevel: object({ value: string(), label: string() }).required(fieldRequired),
		otherRequirenments: string().required(fieldRequired),
	});
};
