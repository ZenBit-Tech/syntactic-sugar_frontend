import { DashboardHeader, DashboardMenu } from "@freelance/components";
import { IResponseEmployer } from "redux/createEmployer/employerApi";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { ROLES } from "utils/constants/roles";
import { Container, Page, Area } from "./dashboard.styled";

export interface DashboardProps {
	children: React.ReactNode;
	userRole: "freelancer" | "employer";
	typePage?: "createProfile" | "main" | "proposals" | "employerJobs" | "jobs" | "talents";
	profile?: IResponse | IResponseEmployer;
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
	profile,
	handleToggleFilter,
	filterState,
	myProposals,
	allJobs,
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
						myProposals={myProposals}
						allJobs={allJobs}
						showMyProposals={showMyProposals}
						showAllJobs={showAllJobs}
					/>
					<Area>
						<DashboardHeader userRole={userRole} typePage={typePage} profile={profile} />
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
						<DashboardHeader userRole={userRole} typePage={typePage} profile={profile} />
						<Page>{children}</Page>
					</Area>
				</>
			)}
		</Container>
	);
}

export default Dashboard;
