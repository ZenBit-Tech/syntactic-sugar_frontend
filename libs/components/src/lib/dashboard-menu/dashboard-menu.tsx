import { useTranslation } from "react-i18next";
import { FilterButton, StyledButton } from "@freelance/components";
import { ROLES } from "utils/constants/roles";
import { PROPOSALS_PAGE } from "utils/constants/breakpoint";
import { Container, FilterButtonWrap } from "./dashboard-menu.styled";

export interface DashboardMenuProps {
	userRole: "freelancer" | "employer";
	typePage?: "createProfile" | "main" | "proposals" | "jobs";
}

export function DashboardMenu({ userRole, typePage }: DashboardMenuProps) {
	const { t } = useTranslation();

	return (
		<Container>
			<img id="logo" src="/assets/images/white_logo.png" alt="logo" />
			{userRole === ROLES.FREELANCER && (
				<>
					<StyledButton buttonSize="md" fontSize="md" buttonColor="lightRed">
						{t("dashboard.menu.myContracts")}
					</StyledButton>
					<StyledButton buttonSize="md" fontSize="md" buttonColor="lightRed">
						{t("dashboard.menu.searchWorks")}
					</StyledButton>
					<StyledButton disabled={typePage === PROPOSALS_PAGE} buttonSize="md" fontSize="md" buttonColor="lightRed">
						{t("dashboard.menu.proposals")}
					</StyledButton>
					{typePage === PROPOSALS_PAGE &&
						(<FilterButtonWrap>
							<FilterButton buttonSize="filter" fontSize="md" buttonColor="lightRed">
								{t("dashboard.menu.myProposals")}
							</FilterButton>
							<FilterButton buttonSize="filter" fontSize="md" buttonColor="lightRed">
								{t("dashboard.menu.myInvitations")}
							</FilterButton>
							<FilterButton buttonSize="filter" fontSize="md" buttonColor="lightRed">
								{t("dashboard.menu.myOffers")}
							</FilterButton>
						</FilterButtonWrap>
					)}	
				</>
			)}
			{userRole === ROLES.EMPLOYER && (
				<>
					<StyledButton buttonSize="md" fontSize="md" buttonColor="lightRed">
						{t("dashboard.menu.talents")}
					</StyledButton>
					<StyledButton buttonSize="md" fontSize="md" buttonColor="lightRed">
						{t("dashboard.menu.jobs")}
					</StyledButton>
				</>
			)}
		</Container>
	);
}

export default DashboardMenu;
