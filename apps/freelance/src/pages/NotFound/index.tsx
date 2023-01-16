import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeColors, Message } from "@freelance/components";
import { GOBACK } from "src/utils/constants/links";
import { StyledPage, Container, ErrorPageBtn } from "./style";

export function NotFound() {
	const { t } = useTranslation();
	const navigation = useNavigate();

	const redirect = () => {
		navigation(GOBACK);
	};

	return (
		<ThemeProvider theme={ThemeColors}>
			<StyledPage>
				<Container>
					<Message title={t("notFoundPage.errorCode")} subTitle={t("notFoundPage.errorText")}>
						<ErrorPageBtn buttonSize="md" buttonColor="redGradient" onClick={redirect}>
							{t("notFoundPage.btn")}
						</ErrorPageBtn>
					</Message>
				</Container>
			</StyledPage>
		</ThemeProvider>
	);
}

export default NotFound;
