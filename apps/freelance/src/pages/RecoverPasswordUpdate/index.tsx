import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ThemeColors, Message, StyledButton } from "@freelance/components";
import { StyledPage, Container } from "./style";

export function RecoverPasswordUpdate() {
	const { t } = useTranslation();
	const navigation = useNavigate();

	const redirect = () => {
		navigation("/");
	};

	return (
		<ThemeProvider theme={ThemeColors}>
			<StyledPage>
				<Container>
					<Message title={t("recoverPassForm.title")} subTitle={t("recoverPassForm.resetSuccess")}>
						<StyledButton buttonSize="md" buttonColor="redGradient" onClick={redirect}>
							{t("recoverPassForm.homePageBtn")}
						</StyledButton>
					</Message>
				</Container>
			</StyledPage>
		</ThemeProvider>
	);
}

export default RecoverPasswordUpdate;
