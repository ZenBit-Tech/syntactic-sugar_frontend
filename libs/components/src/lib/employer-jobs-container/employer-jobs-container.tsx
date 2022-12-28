import { EmployerJobsEmpty, EmployerJobsList, StyledButton } from "@freelance/components";
import { ToastContainer } from "react-toastify";
import { SkeletonEmployerJobs } from "@freelance/components";
import { JobsContainer } from "./employer-jobs-container.styled";
import { useEmployerJobsContainerHook } from "./employer-jobs-containerHooks";

interface IEmployerJobsContainer {
	isPublished: boolean;
}

export function EmployerJobsContainer({ isPublished }: IEmployerJobsContainer) {
	const { createButton, handleClick, arrayJobs, isLoading } = useEmployerJobsContainerHook({
		isPublished,
	});

	return (
		<JobsContainer>
			{isLoading && <SkeletonEmployerJobs isLoading={isLoading} />}
			{!isLoading && arrayJobs?.length ? (
				<EmployerJobsList data={arrayJobs} />
			) : (
				!isLoading && <EmployerJobsEmpty />
			)}
			{!isLoading && (
				<StyledButton onClick={handleClick} buttonSize="sm" fontSize="lg" buttonColor="redGradient">
					{createButton}
				</StyledButton>
			)}
			<ToastContainer />
		</JobsContainer>
	);
}

export default EmployerJobsContainer;
