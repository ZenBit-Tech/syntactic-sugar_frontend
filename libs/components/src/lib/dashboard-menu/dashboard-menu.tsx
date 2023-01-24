import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FilterButton, StyledButton } from "@freelance/components";
import { ROLES } from "utils/constants/roles";
import { EMPLOYER_JOBS, TALENTS_PAGE } from "utils/constants/breakpoint";
import { EMPLOYER_JOBS_PAGE, TALENTS } from "utils/constants/links";
import { Container, FilterButtonWrap } from "./dashboard-menu.styled";

export interface DashboardMenuProps {
	userRole: "freelancer" | "employer";
	typePage?: "createProfile" | "main" | "proposals" | "employerJobs" | "jobs" | "talents";
	filterState?: boolean;
	myProposals?: boolean;
	allJobs?: boolean;
	invitations?: boolean;
	allTalents?: boolean;
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

export function DashboardMenu({
	userRole,
	typePage,
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
}: DashboardMenuProps) {
	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<Container>
			<img id="logo" src="/assets/images/white_logo.png" alt="logo" />
			{userRole === ROLES.FREELANCER && (
				<>
					<StyledButton
						buttonSize="md"
						fontSize="md"
						buttonColor="lightRed"
						disabled={allJobs}
						onClick={showAllJobs}
					>
						{t("dashboard.menu.allJobs")}
					</StyledButton>
					<StyledButton
						buttonSize="md"
						fontSize="md"
						buttonColor="lightRed"
						disabled={myProposals}
						onClick={showMyProposals}
					>
						{t("dashboard.menu.myProposals")}
					</StyledButton>
					<StyledButton
						buttonSize="md"
						fontSize="md"
						buttonColor="lightRed"
						disabled={myInvitations}
						onClick={showMyInvitations}
					>
						{t("dashboard.menu.myInvitations")}
					</StyledButton>
					<StyledButton
						buttonSize="md"
						fontSize="md"
						buttonColor="lightRed"
						disabled={myOffers}
						onClick={showMyOffers}
					>
						{t("dashboard.menu.myOffers")}
					</StyledButton>
				</>
			)}
			{userRole === ROLES.EMPLOYER && (
				<>
					<StyledButton
						buttonSize="md"
						fontSize="md"
						buttonColor="lightRed"
						onClick={() => navigate(TALENTS)}
						disabled={typePage === TALENTS_PAGE}
					>
						{t("dashboard.menu.talents")}
					</StyledButton>
					<StyledButton
						buttonSize="md"
						fontSize="md"
						buttonColor="lightRed"
						onClick={() => navigate(EMPLOYER_JOBS_PAGE)}
						disabled={typePage === EMPLOYER_JOBS}
					>
						{t("dashboard.menu.jobs")}
					</StyledButton>
					{typePage === EMPLOYER_JOBS && (
						<FilterButtonWrap>
							<FilterButton
								onClick={handleToggleFilter}
								buttonSize="filter"
								fontSize="md"
								buttonColor="lightRed"
								disabled={filterState}
							>
								{t("dashboard.menu.publishedJobs")}
							</FilterButton>
							<FilterButton
								onClick={handleToggleFilter}
								buttonSize="filter"
								fontSize="md"
								buttonColor="lightRed"
								disabled={!filterState}
							>
								{t("dashboard.menu.closedJobs")}
							</FilterButton>
						</FilterButtonWrap>
					)}
					{typePage === TALENTS_PAGE && (
						<FilterButtonWrap>
							<FilterButton
								buttonSize="filter"
								fontSize="md"
								buttonColor="lightRed"
								disabled={allTalents}
								onClick={showAllTallents}
							>
								{t("dashboard.menu.all")}
							</FilterButton>
							<FilterButton
								buttonSize="filter"
								fontSize="md"
								buttonColor="lightRed"
								disabled={invitations}
								onClick={showInvitations}
							>
								{t("dashboard.menu.invitation")}
							</FilterButton>
						</FilterButtonWrap>
					)}
				</>
			)}
		</Container>
	);
}

export default DashboardMenu;
