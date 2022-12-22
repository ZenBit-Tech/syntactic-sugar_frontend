import { object, SchemaOf, string } from "yup";
import { useTranslation } from "react-i18next";
import { IJobPostingFirstForm } from "@freelance/components";

export const useFirstFormSchema = (): SchemaOf<IJobPostingFirstForm> => {
	const { t } = useTranslation();

	const messageJobTitleMaxChar: string = t(
		"newJobPosting.firstForm.validation.messageJobTitleMaxChar",
	);
	const messageDescriptionMaxChar: string = t(
		"newJobPosting.firstForm.validation.messageDescriptionMaxChar",
	);
	const messageJobTitleRequired: string = t(
		"newJobPosting.firstForm.validation.messageJobTitleRequired",
	);
	const messageDescriptionRequired: string = t(
		"newJobPosting.firstForm.validation.messageDescriptionRequired",
	);

	return object({
		title: string().max(50, messageJobTitleMaxChar).required(messageJobTitleRequired),
		description: string().max(600, messageDescriptionMaxChar).required(messageDescriptionRequired),
	});
};
