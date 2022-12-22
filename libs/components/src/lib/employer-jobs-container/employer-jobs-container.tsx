import { EmployerJobsEmpty, EmployerJobsList, StyledButton } from "@freelance/components";
import { Skeleton } from "antd";
import { JobsContainer } from "./employer-jobs-container.styled";
import { useEmployerJobsContainerHook } from "./employer-jobs-containerHooks";

export function EmployerJobsContainer() {
	const { createButton, handleClick, data, isLoading } = useEmployerJobsContainerHook();

	return (
		<JobsContainer>
			<Skeleton loading={isLoading} active={isLoading} paragraph={{ rows: 8 }} />
			{isLoading && <Skeleton.Button active={isLoading} size="small" block={isLoading} />}
			{!isLoading && data?.length ? (
				<EmployerJobsList data={data} />
			) : (
				!isLoading && <EmployerJobsEmpty />
			)}
			{!isLoading && (
				<StyledButton onClick={handleClick} buttonSize="sm" fontSize="lg" buttonColor="redGradient">
					{createButton}
				</StyledButton>
			)}
		</JobsContainer>
	);
}

export default EmployerJobsContainer;
