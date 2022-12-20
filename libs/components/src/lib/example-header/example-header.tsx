import { useTranslation } from "react-i18next";
import { StyledTitle } from "@freelance/components";
import { ThemeColors } from "@freelance/components";
import { ThemeProvider } from "styled-components";

/* eslint-disable-next-line */
export interface ExampleHeaderProps {}

export function ExampleHeader(props: ExampleHeaderProps) {
	const { t } = useTranslation();

	return (
		<ThemeProvider theme={ThemeColors}>
			<StyledTitle tag="h1" fontWeight={800} fontSize="lg">
				{t("Hello, Syntactic sugar!")}
			</StyledTitle>
		</ThemeProvider>
	);
}

export default ExampleHeader;
