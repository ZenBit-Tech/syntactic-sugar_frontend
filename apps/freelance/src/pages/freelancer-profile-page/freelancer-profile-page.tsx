import { useTranslation } from "react-i18next";
import { StyledPage } from "./freelancer-profile-page.styled";
import { ThemeColors, ThemeBackground, Dashboard, StyledTitle } from "@freelance/components";
import { ThemeProvider } from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FreelancerPageProps {}

export function FreelancerPage(props: FreelancerPageProps) {
	const { t } = useTranslation();

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<StyledPage>
				<Dashboard role="freelancer">
					<StyledTitle tag="h2" fontSize="md" fontWeight={700}>
						{t("dashboard.profilePage.title")}
					</StyledTitle>
				</Dashboard>
			</StyledPage>
		</ThemeProvider>
	);
}

export default FreelancerPage;
