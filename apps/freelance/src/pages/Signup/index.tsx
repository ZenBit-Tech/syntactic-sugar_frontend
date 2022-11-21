import { useTranslation } from "react-i18next";
import { Container, StyledPage } from "./style";
import { ThemeColors, FormContainer, MessageContainer } from "@freelance/components";
import { ThemeProvider } from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SignUpPageProps {}

export function SignUpPage(props: SignUpPageProps) {
	const { t } = useTranslation();

	return (
		<ThemeProvider theme={ThemeColors}>
			<StyledPage>
				<Container>
					<MessageContainer
						isRightSide={false}
						isSignForm={true}
						title={t("signForm.title")}
						subTitle={t("signForm.subtitle")}
					/>
					<FormContainer
						isSignForm={true}
						isRightSide={true}
						formType="signup"
						title={t("signForm.welcome")}
						subTitle={t("signForm.signUpSubtitle")}
						signText={t("signForm.haveAcc")}
						signLink={t("signForm.signInNow")}
					/>
				</Container>
			</StyledPage>
		</ThemeProvider>
	);
}

export default SignUpPage;
