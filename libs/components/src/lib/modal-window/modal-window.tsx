import { StyledButton } from "@freelance/components";
import { useTranslation } from "react-i18next";

/* eslint-disable-next-line */
export interface ModalWindowProps {
	handlePublishedButton: () => void;
	handleWithoutPublishButton: () => void;
}

export function ModalWindow({ handlePublishedButton, handleWithoutPublishButton }: ModalWindowProps) {
	const { t } = useTranslation();
	return (
		<>
			<StyledButton
				type="button"
				buttonColor="redGradient"
				buttonSize="sm"
				fontSize="md"
				onClick={handleWithoutPublishButton}
			>
				<strong>{t("freelancer.createProfile.modalBtnNo")}</strong>
			</StyledButton>
			<StyledButton
				type="button"
				buttonColor="redGradient"
				buttonSize="sm"
				fontSize="md"
				onClick={handlePublishedButton}
			>
				<strong>{t("freelancer.createProfile.modalBtnYes")}</strong>
			</StyledButton>
		</>
	);
}

export default ModalWindow;
