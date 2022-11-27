import { useTranslation } from "react-i18next";
import { StyledPage, Container, Item } from "./style";
import {
	ThemeColors,
	ThemeBackground,
	Dashboard,
	StyledTitle,
	StyledButton,
} from "@freelance/components";
import { ThemeProvider } from "styled-components";

export function ViewProfile() {
	const { t } = useTranslation();

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<StyledPage>
				<Dashboard userRole="freelancer">
					<StyledTitle tag="h2" fontSize="md" fontWeight={700}>
						{t("dashboard.profilePage.title")}
					</StyledTitle>
					<Container>
						<Item>
							<div>Country</div>
						</Item>
						<Item>
							<div>Country</div>
						</Item>
						<Item>
							<div>Country</div>
						</Item>
						<Item>
							<div>Country</div>
						</Item>
						<Item>
							<div>Country</div>
						</Item>
						<Item>
							<div>Country</div>
						</Item>
						<Item>
							<div>Country</div>
						</Item>
						<Item>
							<div>Country</div>
						</Item>
						<Item>
							<div>Country</div>
						</Item>
						<Item>
							<div>Country</div>
						</Item>
						<Item>
							<div>Country</div>
						</Item>
						<Item>
							<div>Country</div>
						</Item>
						<StyledButton type="button" buttonColor="redGradient" buttonSize="sm" fontSize="md">
							<strong>{t("recoverPassForm.buttonContinue")}</strong>
						</StyledButton>
					</Container>
				</Dashboard>
			</StyledPage>
		</ThemeProvider>
	);
}

export default ViewProfile;
