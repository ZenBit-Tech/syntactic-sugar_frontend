import { StyledPage, Container } from "./style";
import { useTranslation } from "react-i18next";
import { Message } from "@freelance/components";

export function RecoverPasswordCheck() {
	const { t } = useTranslation();

	return (
		<StyledPage>
			<Container>
				<Message
					title={t("recoverPassForm.title")}
					subTitle={t("resetPasswordPage.checkYourEmail")}
				/>
			</Container>
		</StyledPage>
	);
}

export default RecoverPasswordCheck;
