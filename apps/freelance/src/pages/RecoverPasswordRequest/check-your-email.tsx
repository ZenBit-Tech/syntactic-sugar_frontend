import { useTranslation } from "react-i18next";
import { StyledTitle } from "@freelance/components";
import { Container } from "./style";

export function CheckYourEmail() {
	const { t } = useTranslation();

	return (
		<Container>
			<StyledTitle tag="h1" fontWeight={400} fontSize="md">
				{t("resetPasswordPage.checkYourEmail")}
			</StyledTitle>
		</Container>
	);
}

export default CheckYourEmail;
