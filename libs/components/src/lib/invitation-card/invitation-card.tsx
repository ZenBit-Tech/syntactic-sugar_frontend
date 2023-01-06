import { StyledButton, StyledTitle } from "@freelance/components";
import { useTranslation } from "react-i18next";
import { SelectElement, Wrapper } from "./invitation-card.styles";

export interface InvitationCardProps {}

export function InvitationCard(props: InvitationCardProps) {
	const { t } = useTranslation();

	return (
		<Wrapper>
			<StyledTitle tag="h1" fontSize="lg" fontWeight={500}>
				{t("talents.invitation")}
			</StyledTitle>
			<SelectElement
				classNamePrefix="react-select"
				placeholder={t("talents.select")}
			></SelectElement>
			<StyledButton buttonSize="filter" buttonColor="lightRed" fontSize="md">
				<strong>{t("talents.send")}</strong>
			</StyledButton>
		</Wrapper>
	);
}

export default InvitationCard;
