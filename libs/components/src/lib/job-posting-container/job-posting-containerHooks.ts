import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface INewJobPostingHook {
	description: string;
	goBackButton: string;
	createButtonText: string;
	continueButton: string;
	goBack: () => void;
}

export const useJobPostingContainerHook = (): INewJobPostingHook => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const description: string = t("newJobPosting.description");
	const goBackButton: string = t("newJobPosting.goBackButton");
	const createButtonText: string = t("newJobPosting.createButton");
	const continueButton: string = t("newJobPosting.continueButton");

	const goBack = (): void => {
		navigate(-1);
	};

	return {
		description,
		goBackButton,
		createButtonText,
		continueButton,
		goBack,
	};
};
