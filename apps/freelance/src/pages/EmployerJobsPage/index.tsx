import { Dashboard, EmployerJobsContainer, StyledPage } from "@freelance/components";

export function EmployerJobsPage() {
	return (
		<StyledPage>
			<Dashboard userRole="employer">
				<EmployerJobsContainer />
				{/* <JobsContainer>
					<JobsParagraph fontSize="lg">{t("employerJobsPage.noJobs")}</JobsParagraph>
					<StyledButton
						onClick={handleClick}
						buttonSize="sm"
						fontSize="lg"
						buttonColor="redGradient"
					>
						{t("employerJobsPage.createButton")}
					</StyledButton>
				</JobsContainer> */}
			</Dashboard>
		</StyledPage>
	);
}

export default EmployerJobsPage;
