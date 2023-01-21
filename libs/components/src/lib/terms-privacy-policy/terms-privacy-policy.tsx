import { useTranslation } from "react-i18next";
import { Title, Paragraph, Button } from "./terms-privacy-policy.styled";

export interface ITermsPrivacyPolicyProps {
	onCancel: () => void;
}

export function TermsPrivacyPolicy({ onCancel }: ITermsPrivacyPolicyProps) {
	const { t } = useTranslation();

	return (
		<>
			<Title tag="h2" fontSize="md" fontWeight={700}>
				{t("privacyPolicy.title")}
			</Title>
			<Paragraph fontSize="md">{t("privacyPolicy.desc")}</Paragraph>
			<Button buttonColor="lightRed" fontSize="md" buttonSize="filter" onClick={onCancel}>
				{t("privacyPolicy.btn")}
			</Button>
		</>
	);
}
