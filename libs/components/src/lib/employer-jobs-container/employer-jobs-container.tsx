import { EmployerJobsEmpty, EmployerJobsList, StyledButton } from "@freelance/components";
import { JobsContainer } from "./employer-jobs-container.styled";
import { useEmployerJobsContainerHook } from "./employer-jobs-containerHooks";

export function EmployerJobsContainer() {
	const { createButton, handleClick, data, isLoading } = useEmployerJobsContainerHook();

	return (
		<JobsContainer>
			{data?.length ? <EmployerJobsList data={data} /> : <EmployerJobsEmpty />}
			<StyledButton onClick={handleClick} buttonSize="sm" fontSize="lg" buttonColor="redGradient">
				{createButton}
			</StyledButton>
		</JobsContainer>
	);
}

export default EmployerJobsContainer;
