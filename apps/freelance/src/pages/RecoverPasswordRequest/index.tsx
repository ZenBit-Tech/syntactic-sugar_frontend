import { useTranslation } from "react-i18next";
import { Container, StyledPage } from "./style";
import { ThemeProvider } from "styled-components";
import {
	ThemeColors,
	FormContainer,
	MessageContainer,
	ThemeBackground,
} from "@freelance/components";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RecoverPasswordRequestProps {}

export function RecoverPasswordRequest(props: RecoverPasswordRequestProps) {
	const { t } = useTranslation();

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
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
