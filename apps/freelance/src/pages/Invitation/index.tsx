import { StyledPage, Container } from "./style";
import { useTranslation } from "react-i18next";
import { Message, StyledButton } from "@freelance/components";
import { useNavigate } from "react-router-dom";

export function Invitation() {
	const { t } = useTranslation();
	const navigation = useNavigate();

	const redirect = () => {
		navigation("/role-page");
	};

	return (
		<StyledPage>
			<Container>
				<Message title={t("invitationPage.title")} subTitle={t("invitationPage.subtitle")}>
					<StyledButton buttonSize="md" buttonColor="redGradient" onClick={redirect}>
						{t("recoverPassForm.buttonContinue")}
					</StyledButton>
				</Message>
			</Container>
		</StyledPage>
	);
}

export default Invitation;
