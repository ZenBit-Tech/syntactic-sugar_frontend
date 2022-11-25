import { useTranslation } from "react-i18next";
import { StyledPage, Container } from "./styles";
import { ThemeColors } from "@freelance/components";
import { ThemeProvider } from "styled-components";
import { SendProposalFreelancer } from "@freelance/components";

export function SendProposal() {
	const { t } = useTranslation();

	return (
		<ThemeProvider theme={ThemeColors}>
			<StyledPage>
				<Container>
					<SendProposalFreelancer/>
				</Container>
			</StyledPage>
		</ThemeProvider>
	);
}

export default SendProposal;
