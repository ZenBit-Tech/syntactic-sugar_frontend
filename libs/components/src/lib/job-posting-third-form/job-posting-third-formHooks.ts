import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IJobPostingThirdForm, IUseJobPostingThirdForm } from "./interfaces";

export const useJobPostingThirdFormHook = (): IUseJobPostingThirdForm => {
	const { t } = useTranslation();

	const skillsLabel: string = t("newJobPosting.thirdForm.skillsLabel");
	const skillsPlaceholder: string = t("newJobPosting.thirdForm.skillsPlaceholder");
	const englishLevelLabel: string = t("newJobPosting.thirdForm.englishLevelLabel");
	const englishLevelPlaceholder: string = t("newJobPosting.thirdForm.englishLevelPlaceholder");
	const otherRequirenmentsLabel: string = t("newJobPosting.thirdForm.otherRequirenmentsLabel");
	const otherRequirenmentsPlaceholder: string = t("newJobPosting.thirdForm.postitonPlaceholder");

	const onSubmit: SubmitHandler<IJobPostingThirdForm> = data => {
		console.log(data);
	};

	return {
		skillsLabel,
		skillsPlaceholder,
		englishLevelLabel,
		englishLevelPlaceholder,
		otherRequirenmentsLabel,
		otherRequirenmentsPlaceholder,
		onSubmit,
	};
};
