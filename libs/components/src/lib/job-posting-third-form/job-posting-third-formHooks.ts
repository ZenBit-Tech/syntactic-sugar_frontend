import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "redux/example-hooks";
import { addNewJobInfo } from "redux/newJobPosting";
import { IJobPostingThirdForm, IUseJobPostingThirdForm } from "@freelance/components";

export const useJobPostingThirdFormHook = (): IUseJobPostingThirdForm => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

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
		const resultData = {
			skills: data.skills.map(skill => skill.label),
			englishLevel: data.englishLevel.label,
			otherRequirenments: data.otherRequirenments,
		};

		dispatch(addNewJobInfo(resultData));
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
