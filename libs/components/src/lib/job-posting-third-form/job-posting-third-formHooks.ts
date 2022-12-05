import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IJobPostingThirdForm, IUseJobPostingThirdForm } from "@freelance/components";

export const useJobPostingThirdFormHook = (): IUseJobPostingThirdForm => {
	const { t } = useTranslation();

	const skillsLabel: string = t("newJobPosting.thirdForm.skillsLabel");
	const skillsPlaceholder: string = t("newJobPosting.thirdForm.skillsPlaceholder");
	const englishLevelLabel: string = t("newJobPosting.thirdForm.englishLevelLabel");
	const englishLevelPlaceholder: string = t("newJobPosting.thirdForm.englishLevelPlaceholder");
	const otherRequirenmentsLabel: string = t("newJobPosting.thirdForm.otherRequirenmentsLabel");
	const otherRequirenmentsPlaceholder: string = t(
		"newJobPosting.thirdForm.otherRequirenmentsLabel",
	);
	const fieldRequired: string = t("newJobPosting.validation.messageFieldRequired");

	const onSubmit: SubmitHandler<IJobPostingThirdForm> = data => {
		//Will add storing to redux, for now only console.log
		console.log(data);
	};

	return {
		skillsLabel,
		skillsPlaceholder,
		englishLevelLabel,
		englishLevelPlaceholder,
		otherRequirenmentsLabel,
		otherRequirenmentsPlaceholder,
		fieldRequired,
		onSubmit,
	};
};
