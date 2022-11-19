import { useTranslation } from "react-i18next";
import {
	Container,
	UserInfoWrapper,
	ButtonsWrapper,
	UserDetails,
} from "./dashboard-header.styled";
import { StyledButton, StyledParagraph } from "@freelance/components";

/* eslint-disable-next-line */
export interface DashboardHeaderProps {}

export function DashboardHeader(props: DashboardHeaderProps) {
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
			<ButtonsWrapper>
				<StyledButton buttonSize="md" buttonColor="lightRed">
					{t("dashboard.header.chat")}
					<img src="/assets/images/chat_btn_icon.png" alt="Chat Icon" />
				</StyledButton>
				<StyledButton buttonSize="md" buttonColor="darkRed">
					{t("dashboard.header.logout")}
					<img src="/assets/images/logout_btn_icon.png" alt="Logout Icon" />
				</StyledButton>
			</ButtonsWrapper>
		</Container>
	);
}

export default DashboardHeader;
