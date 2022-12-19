import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface INewJobPostingHook {
	description: string;
	goBackButton: string;
	createButtonText: string;
	continueButton: string;
	toggleText: string;
	passLoaderOrString: (isLoaing: boolean) => void;
	goBack: (goBackLink: string) => void;
}

export const useJobPostingContainerHook = (): INewJobPostingHook => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [toggleText, setToggleText] = useState<string>("");

	const description: string = t("newJobPosting.description");
	const buttonLoaderText = t("newJobPosting.buttonLoaderText");
	const goBackButton: string = t("newJobPosting.goBackButton");
	const createButtonText: string = t("newJobPosting.createButton");
	const continueButton: string = t("newJobPosting.continueButton");

	const goBack = (goBackLink: string): void => {
		navigate(goBackLink);
	};

	const passLoaderOrString = (isLoading: boolean): void => {
		if (isLoading) {
			setToggleText(buttonLoaderText);
		} else {
			setToggleText(createButtonText);
		}
	};

	return {
		description,
		goBackButton,
		createButtonText,
		continueButton,
		passLoaderOrString,
		toggleText,
		goBack,
	};
};
