import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { ThemeColors, Message } from "@freelance/components";
import { StyledPage, Container } from "./style";

export function RecoverPasswordCheck() {
	const { t } = useTranslation();

	return (
		<ThemeProvider theme={ThemeColors}>
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
