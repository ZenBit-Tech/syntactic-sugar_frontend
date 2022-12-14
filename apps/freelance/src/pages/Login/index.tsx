import { useTranslation } from "react-i18next";
import { StyledPage, Container } from "./style";
import { ThemeColors, FormContainer, MessageContainer } from "@freelance/components";
import { ThemeProvider } from "styled-components";

export function Login() {
	const { t } = useTranslation();

	return (
		<ThemeProvider theme={ThemeColors}>
			<StyledPage>
				<Container>
					<FormContainer
						isSignForm={true}
						isRightSide={false}
						formType="login"
						title={t("signForm.welcome")}
						subTitle={t("signForm.signInSubtitle")}
						signText={t("signForm.noAcc")}
						signLink={t("signForm.signUpNow")}
						forgotPassText={t("signForm.forgotPass")}
						forgotPassLink={t("signForm.recoverNow")}
					/>
					<MessageContainer
						isSignForm={true}
						isRightSide={true}
						title={t("signForm.title")}
						subTitle={t("signForm.subtitle")}
					/>
				</Container>
			</StyledPage>
		</ThemeProvider>
	);
}

export default Login;
