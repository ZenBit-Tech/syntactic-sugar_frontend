import { useNavigate } from "react-router-dom";
import { Dashboard, StyledButton, StyledPage } from "@freelance/components";
import { CREATE_NEW_JOB_FIRST_PAGE } from "utils/constants/links";
import { JobsContainer, JobsParagraph } from "./style";

export function EmployerJobsPage() {
	const navigate = useNavigate();

	const handleClick = (): void => {
		navigate(CREATE_NEW_JOB_FIRST_PAGE);
	};

	return (
		<StyledPage>
			<Dashboard userRole="employer">
				<JobsContainer>
					<JobsParagraph fontSize="lg">
						You haven't posted a job yet! Create your job!
					</JobsParagraph>
					<StyledButton
						onClick={handleClick}
						buttonSize="sm"
						fontSize="lg"
						buttonColor="redGradient"
					>
						Create new job
					</StyledButton>
				</JobsContainer>
			</Dashboard>
		</StyledPage>
	);
}

export default EmployerJobsPage;
