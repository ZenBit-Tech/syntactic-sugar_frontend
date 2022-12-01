import { useTranslation } from "react-i18next";
import { FormContainer, MessageContainer } from "@freelance/components";
import { Container, StyledPage } from "./style";

export function RecoverPasswordReset() {
	const { t } = useTranslation();

	return (
		<StyledPage>
			<Container>
				<FormContainer
					isSignForm={false}
					isRightSide={false}
					formType="recoverPass2"
					title={t("recoverPassForm.newPassword")}
					subTitle={t("recoverPassForm.enterPassword")}
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
