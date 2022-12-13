import { StyledPage, StyledTitle } from "@freelance/components";
import { useTranslation } from "react-i18next";
import { Container } from "@freelance/components";

export function WorkDetails() {
	const { t } = useTranslation();

	return (
		<StyledPage>
			<Container>
				<StyledTitle tag="h1" fontSize="lg" fontWeight={700}>
					{t("jobDetails.title")}
				</StyledTitle>
			</Container>
		</StyledPage>
	);
}
