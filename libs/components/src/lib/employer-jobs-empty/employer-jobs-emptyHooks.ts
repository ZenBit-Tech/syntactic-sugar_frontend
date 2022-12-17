import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CREATE_NEW_JOB_FIRST_PAGE } from "utils/constants/links";

interface IUseEmployerEmptyHooks {
	noJobs: string;
	createButton: string;
	handleClick: () => void;
}

export const useEmployerEmptyHook = (): IUseEmployerEmptyHooks => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const noJobs = t("employerJobsPage.noJobs");
	const createButton = t("employerJobsPage.createButton");

	const handleClick = (): void => {
		navigate(CREATE_NEW_JOB_FIRST_PAGE);
	};

	return {
		noJobs,
		createButton,
		handleClick,
	};
};
