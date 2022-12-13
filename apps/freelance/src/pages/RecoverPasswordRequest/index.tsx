import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { ThemeColors, FormContainer, MessageContainer } from "@freelance/components";
import { Container, StyledPage } from "./style";

export function RecoverPasswordRequest() {
	const { t } = useTranslation();

	return (
		<ThemeProvider theme={ThemeColors}>
			<StyledPage>
				<Container>
					<FormContainer
						isSignForm={false}
						isRightSide={false}
						formType="recoverPass1"
						title={t("recoverPassForm.forgotPass")}
						subTitle={t("recoverPassForm.enterEmail")}
						signText={t("recoverPassForm.rememberPass")}
						signLink={t("signForm.signInNow")}
					/>
					<MessageContainer
						isRightSide={true}
						isSignForm={false}
						title={t("recoverPassForm.title")}
						subTitle={t("recoverPassForm.subtitle")}
					/>
				</Container>
			</StyledPage>
		</ThemeProvider>
	);
}

export default RecoverPasswordRequest;
