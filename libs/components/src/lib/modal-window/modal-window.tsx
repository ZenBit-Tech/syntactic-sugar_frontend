import { StyledButton } from "@freelance/components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "redux/example-hooks";
import {
	useCreateFreelancerMutation,
	useAddPublishedMutation,
} from "redux/createFreelancer/freelancer-pageApi";

/* eslint-disable-next-line */

export function ModalWindow() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const freelancerState = useAppSelector(state => state.freelancer);
	const [createFreelancer] = useCreateFreelancerMutation();
	const [addPublished] = useAddPublishedMutation();
	const handlePublishedButton = () => {
		createFreelancer(freelancerState);
		addPublished({ isPublished: true });
		navigate("/searchworkpage");
	};

	const handleWithoutPublishButton = () => {
		navigate("/searchworkpage");
	};

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
