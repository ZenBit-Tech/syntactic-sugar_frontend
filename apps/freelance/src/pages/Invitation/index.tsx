import { StyledPage, Container } from "./style";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { ThemeColors, ThemeBackground, Message, StyledButton } from "@freelance/components";
import { useNavigate } from "react-router-dom";

export function Invitation() {
	const { t } = useTranslation();
	const navigation = useNavigate();

	const redirect = () => {
		navigation("/role-page");
	};

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
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
