import { useTranslation } from "react-i18next";
import { Container, StyledPage } from "./style";
import { FormContainer, MessageContainer } from "@freelance/components";

export function RecoverPasswordRequest() {
	const { t } = useTranslation();

	return (
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
	);
}

export default RecoverPasswordRequest;
