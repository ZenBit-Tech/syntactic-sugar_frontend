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
	invitations?: boolean;
	allTalents?: boolean;
	allJobs?: boolean;
	myInvitations?: boolean;
	myOffers?: boolean;
	handleToggleFilter?: () => void;
	showMyProposals?: () => void;
	showAllJobs?: () => void;
	showInvitations?: () => void;
	showAllTallents?: () => void;
	showMyInvitations?: () => void;
	showMyOffers?: () => void;
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
	invitations,
	allTalents,
	myInvitations,
	myOffers,
	showMyProposals,
	showAllJobs,
	showInvitations,
	showAllTallents,
	showMyInvitations,
	showMyOffers,
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
						myInvitations={myInvitations}
						myOffers={myOffers}
						showMyProposals={showMyProposals}
						showAllJobs={showAllJobs}
						showMyInvitations={showMyInvitations}
						showMyOffers={showMyOffers}
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
						invitations={invitations}
						allTalents={allTalents}
						handleToggleFilter={handleToggleFilter}
						showInvitations={showInvitations}
						showAllTallents={showAllTallents}
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
