import { Dashboard, EmployerJobsContainer, StyledPage } from "@freelance/components";

export function EmployerJobsPage() {
	return (
		<StyledPage>
			<Dashboard userRole="employer">
				<EmployerJobsContainer />
			</Dashboard>
		</StyledPage>
	);
}

export default EmployerJobsPage;
