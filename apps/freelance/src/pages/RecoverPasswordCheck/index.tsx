import { StyledPage, Container } from "./style";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { ThemeColors, ThemeBackground, Message } from "@freelance/components";

export function RecoverPasswordCheck() {
	const { t } = useTranslation();

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<StyledPage>
				<Container>
					<Message
						title={t("recoverPassForm.title")}
						subTitle={t("resetPasswordPage.checkYourEmail")}
					/>
				</Container>
			</StyledPage>
		</ThemeProvider>
	);
}

export default RecoverPasswordCheck;
