import { array, object, SchemaOf, string } from "yup";
import { useTranslation } from "react-i18next";
import { IJobPostingThirdForm } from "@freelance/components";

export const useThirdFormSchema = (): SchemaOf<IJobPostingThirdForm> => {
	const { t } = useTranslation();

	const maxSkills = t("newJobPosting.thirdForm.validation.maxSkills");
	const fieldRequired = t("newJobPosting.validation.messageFieldRequired");

	return object({
		skills: array(
			object({
				value: string(),
				label: string(),
			}),
		)
			.max(3, maxSkills)
			.min(1, fieldRequired),
		englishLevel: object({
			value: string().required(fieldRequired),
			label: string().required(fieldRequired),
		}),
		otherRequirenments: string().required(fieldRequired),
	});
};
