import { useTranslation } from "react-i18next";
import { Container, StyledPage } from "./style";
import { ThemeProvider } from "styled-components";
import { ThemeColors, FormContainer, MessageContainer } from "@freelance/components";

export function Role() {
	const { t } = useTranslation();

	return (
		<ThemeProvider theme={ThemeColors}>
			<StyledPage>
				<Container>
					<FormContainer
						isSignForm={false}
						isRightSide={false}
						formType="roleSelection"
						title={t("roleSelection.roleTitle")}
						subTitle={t("roleSelection.roleSubtitle")}
					/>
					<MessageContainer
						isRightSide={true}
						isSignForm={true}
						title={t("signForm.title")}
						subTitle={t("signForm.subtitle")}
					/>
				</Container>
			</StyledPage>
		</ThemeProvider>
	);
}

export default Role;
