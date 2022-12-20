import { useTranslation } from "react-i18next";
import { Container, FilterButtonWrap } from "./dashboard-menu.styled";
import { FilterButton, StyledButton } from "@freelance/components";

export interface DashboardMenuProps {
	userRole: "freelancer" | "employer";
	page?: "proposals" | "searchWork";
}

export function DashboardMenu({ userRole, page }: DashboardMenuProps) {
	const { t } = useTranslation();

	return (
		<Container>
			<img id="logo" src="/assets/images/white_logo.png" alt="logo" />
			{userRole === "freelancer" && (
				<>
					<StyledButton buttonSize="md" fontSize="md" buttonColor="lightRed">
						{t("dashboard.menu.myContracts")}
					</StyledButton>
					<StyledButton buttonSize="md" fontSize="md" buttonColor="lightRed">
						{t("dashboard.menu.searchWorks")}
					</StyledButton>
					<StyledButton disabled={page === "proposals"} buttonSize="md" fontSize="md" buttonColor="lightRed">
						{t("dashboard.menu.proposals")}
					</StyledButton>
					{page === "proposals" &&
						(<FilterButtonWrap>
							<FilterButton buttonSize="filter" fontSize="md" buttonColor="lightRed">
								{t("dashboard.menu.myProposals")}
							</FilterButton>
							<FilterButton buttonSize="filter" fontSize="md" buttonColor="lightRed">
								{t("dashboard.menu.myOffers")}
							</FilterButton>
						</FilterButtonWrap>
					)}	
				</>
			)}
			{userRole === "employer" && (
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
