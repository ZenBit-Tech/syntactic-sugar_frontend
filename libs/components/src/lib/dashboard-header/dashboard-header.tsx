import { useTranslation } from "react-i18next";
import { StyledButton, StyledParagraph } from "@freelance/components";
import { ROLES } from "utils/constants/roles";
import { Container, UserInfoWrapper, ButtonsWrapper, UserDetails } from "./dashboard-header.styled";

export interface DashboardHeaderProps {
	userRole: "freelancer" | "employer";
}

export function DashboardHeader({ userRole }: DashboardHeaderProps) {
	const { t } = useTranslation();

	return (
		<Container>
			<UserInfoWrapper>
				<img src="/assets/images/user_avatar.png" alt="User Avatar" />
				<UserDetails>
					<StyledParagraph fontSize="lg">
						<strong>{t("dashboard.header.userName")}</strong>
					</StyledParagraph>
					<StyledParagraph fontSize="md">{t("dashboard.header.userEmail")}</StyledParagraph>
				</UserDetails>
			</UserInfoWrapper>
			{userRole === ROLES.FREELANCER && (
				<ButtonsWrapper>
					<StyledButton buttonSize="md" buttonColor="lightRed" fontSize="md">
						{t("dashboard.header.chat")}
						<img src="/assets/images/chat_btn_icon.png" alt="Chat Icon" />
					</StyledButton>
					<StyledButton buttonSize="md" buttonColor="darkRed" fontSize="md">
						{t("dashboard.header.logout")}
						<img src="/assets/images/logout_btn_icon.png" alt="Logout Icon" />
					</StyledButton>
				</ButtonsWrapper>
			)}
			{userRole === ROLES.EMPLOYER && (
				<ButtonsWrapper>
					<StyledButton buttonSize="md" buttonColor="lightRed" fontSize="md">
						{t("dashboard.header.chat")}
						<img src="/assets/images/chat_btn_icon.png" alt="Chat Icon" />
					</StyledButton>
					<StyledButton buttonSize="md" buttonColor="darkRed" fontSize="md">
						{t("dashboard.header.logout")}
						<img src="/assets/images/logout_btn_icon.png" alt="Logout Icon" />
					</StyledButton>
				</ButtonsWrapper>
			)}
		</Container>
	);
}

export default DashboardHeader;
