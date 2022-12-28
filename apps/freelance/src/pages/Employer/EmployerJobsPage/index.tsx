import { Dashboard, EmployerJobsContainer, StyledPage } from "@freelance/components";
import { useEmployerJobPageHook } from "./hooks";

export function EmployerJobsPage() {
	const { isPublished, handleToggleStatusJob } = useEmployerJobPageHook();

	return (
		<StyledPage>
			<Dashboard
				userRole="employer"
				typePage="employerJobs"
				handleToggleFilter={handleToggleStatusJob}
				filterState={isPublished}
			>
				<EmployerJobsContainer isPublished={isPublished} />
			</Dashboard>
		</StyledPage>
	);
}

export default EmployerJobsPage;
