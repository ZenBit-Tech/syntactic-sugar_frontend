import { DashboardHeader, DashboardMenu } from "@freelance/components";
import { ROLES } from "utils/constants/roles";
import { Container, Page, Area } from "./dashboard.styled";

export interface DashboardProps {
	children: React.ReactNode;
	userRole: "freelancer" | "employer";
	typePage?: "createProfile" | "main" | "proposals" | "employerJobs" | "jobs" | "talents";
	filterState?: boolean;
	myProposals?: boolean;
	allJobs?: boolean;
	handleToggleFilter?: () => void;
	showMyProposals?: () => void;
	showAllJobs?: () => void;
}

export function Dashboard({
	children,
	userRole,
	typePage,
	handleToggleFilter,
	filterState,
	allJobs,
	myProposals,
	showMyProposals,
	showAllJobs,
}: DashboardProps) {
	return (
		<Container>
			{userRole === ROLES.FREELANCER && (
				<>
					<DashboardMenu
						userRole={userRole}
						typePage={typePage}
						showMyProposals={showMyProposals}
						myProposals={myProposals}
						showAllJobs={showAllJobs}
						allJobs={allJobs}
					/>
					<Area>
						<DashboardHeader userRole={userRole} typePage={typePage} />
						<Page>{children}</Page>
					</Area>
				</>
			)}
			{userRole === ROLES.EMPLOYER && (
				<>
					<DashboardMenu
						userRole={userRole}
						typePage={typePage}
						filterState={filterState}
						handleToggleFilter={handleToggleFilter}
					/>
					<Area>
						<DashboardHeader userRole={userRole} typePage={typePage} />
						<Page>{children}</Page>
					</Area>
				</>
			)}
		</Container>
	);
}

export default Dashboard;
