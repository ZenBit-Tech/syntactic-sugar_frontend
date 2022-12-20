import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useGetJobsByEmployerQuery } from "redux/jobs";
import { CREATE_NEW_JOB_FIRST_PAGE } from "utils/constants/links";
import { JobsInterface } from "redux/jobs";

interface IUseEmployerJobsContainerHooks {
	createButton: string;
	isLoading: boolean;
	data: JobsInterface[] | undefined;
	handleClick: () => void;
}

export const useEmployerJobsContainerHook = (): IUseEmployerJobsContainerHooks => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { data, isLoading } = useGetJobsByEmployerQuery();

	const createButton = t("employerJobsPage.createButton");

	const handleClick = (): void => {
		navigate(CREATE_NEW_JOB_FIRST_PAGE);
	};

	return {
		createButton,
		isLoading,
		data,
		handleClick,
	};
};
