import { Dashboard, EmployerJobsContainer, StyledPage } from "@freelance/components";
import { useGetEmployerQuery } from "src/redux/createEmployer/employerApi";
import { useEmployerJobPageHook } from "./hooks";

export function EmployerJobsPage() {
	const { data: employerProfile } = useGetEmployerQuery();
	const { isPublished, handleToggleStatusJob } = useEmployerJobPageHook();

	return (
		<StyledPage>
			<Dashboard
				userRole="employer"
				typePage="employerJobs"
				profile={employerProfile}
				handleToggleFilter={handleToggleStatusJob}
				filterState={isPublished}
			>
				<EmployerJobsContainer isPublished={isPublished} />
			</Dashboard>
		</StyledPage>
	);
}

export default EmployerJobsPage;
