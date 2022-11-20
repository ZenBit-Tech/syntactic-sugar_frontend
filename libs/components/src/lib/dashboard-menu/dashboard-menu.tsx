import { useTranslation } from "react-i18next";
import { Container } from "./dashboard-menu.styled";
import { StyledButton } from "@freelance/components";

/* eslint-disable-next-line */
export interface DashboardMenuProps {
	userRole: "freelancer";
}

export function DashboardMenu({ userRole }: DashboardMenuProps) {
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
					<StyledButton buttonSize="md" fontSize="md" buttonColor="lightRed">
						{t("dashboard.menu.proposals")}
					</StyledButton>
				</>
			)}
		</Container>
	);
}

export default DashboardMenu;
