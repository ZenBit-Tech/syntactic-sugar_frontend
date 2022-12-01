import { StyledPage, Container } from "./style";
import { useTranslation } from "react-i18next";
import { Message, StyledButton } from "@freelance/components";
import { useNavigate } from "react-router-dom";

export function RecoverPasswordUpdate() {
	const { t } = useTranslation();
	const navigation = useNavigate();

	const redirect = () => {
		navigation("/");
	};

	return (
		<StyledPage>
			<Container>
				<Message title={t("recoverPassForm.title")} subTitle={t("recoverPassForm.resetSuccess")}>
					<StyledButton buttonSize="md" buttonColor="redGradient" onClick={redirect}>
						{t("recoverPassForm.homePageBtn")}
					</StyledButton>
				</Message>
			</Container>
		</StyledPage>
	);
}

export default RecoverPasswordUpdate;
