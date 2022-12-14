import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Dashboard, StyledButton, StyledPage } from "@freelance/components";
import { CREATE_NEW_JOB_FIRST_PAGE } from "utils/constants/links";
import { JobsContainer, JobsParagraph } from "./style";

export function EmployerJobsPage() {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleClick = (): void => {
		navigate(CREATE_NEW_JOB_FIRST_PAGE);
	};

	return (
		<StyledPage>
			<Dashboard userRole="employer">
				<JobsContainer>
					<JobsParagraph fontSize="lg">{t("employerJobsPage.noJobs")}</JobsParagraph>
					<StyledButton
						onClick={handleClick}
						buttonSize="sm"
						fontSize="lg"
						buttonColor="redGradient"
					>
						{t("employerJobsPage.createButton")}
					</StyledButton>
				</JobsContainer>
			</Dashboard>
		</StyledPage>
	);
}

export default EmployerJobsPage;
