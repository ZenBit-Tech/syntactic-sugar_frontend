import { useTranslation } from "react-i18next";
import { StyledButton } from "@freelance/components";
import { ROLES } from "utils/constants/roles";
import { Container } from "./dashboard-menu.styled";

export interface DashboardMenuProps {
	userRole: "freelancer" | "employer";
}

export function DashboardMenu({ userRole }: DashboardMenuProps) {
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
					<StyledButton buttonSize="md" fontSize="md" buttonColor="lightRed">
						{t("dashboard.menu.proposals")}
					</StyledButton>
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
