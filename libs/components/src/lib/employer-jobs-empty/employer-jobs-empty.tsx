import { StyledButton } from "@freelance/components";
import { JobsParagraph } from "./employer-jobs-empty.styled";
import { useEmployerEmptyHook } from "./employer-jobs-emptyHooks";

export function EmployerJobsEmpty() {
	const { noJobs, createButton, handleClick } = useEmployerEmptyHook();

	return (
		<>
			<JobsParagraph>{noJobs}</JobsParagraph>
			<StyledButton onClick={handleClick} buttonSize="sm" fontSize="lg" buttonColor="redGradient">
				{createButton}
			</StyledButton>
		</>
	);
}

export default EmployerJobsEmpty;
