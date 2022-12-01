import { useTranslation } from "react-i18next";
import { Container, StyledPage } from "./style";
import { FormContainer, MessageContainer } from "@freelance/components";

export function Signup() {
	const { t } = useTranslation();

	return (
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
	);
}

export default Signup;
