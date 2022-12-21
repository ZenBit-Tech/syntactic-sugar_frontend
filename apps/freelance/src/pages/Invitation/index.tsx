import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeColors, Message, StyledButton } from "@freelance/components";
import { ROLE_PAGE } from "src/utils/constants/breakpoint";
import { StyledPage, Container } from "./style";

export function Invitation() {
	const { t } = useTranslation();
	const navigation = useNavigate();

	const redirect = () => {
		navigation(ROLE_PAGE);
	};

	return (
		<ThemeProvider theme={ThemeColors}>
			<StyledPage>
				<Container>
					<Message title={t("invitationPage.title")} subTitle={t("invitationPage.subtitle")}>
						<StyledButton buttonSize="md" buttonColor="redGradient" onClick={redirect}>
							{t("recoverPassForm.buttonContinue")}
						</StyledButton>
					</Message>
				</Container>
			</StyledPage>
		</ThemeProvider>
	);
}

export default Invitation;
