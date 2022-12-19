import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "redux/example-hooks";
import {
	useCreateFreelancerMutation,
	useAddPublishedMutation,
} from "redux/createFreelancer/freelancer-pageApi";
import { SEARCH_WORK } from "utils/constants/breakpoint";
import { StyledButton } from "@freelance/components";

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
		navigate(SEARCH_WORK);
	};

	const handleWithoutPublishButton = () => {
		navigate(SEARCH_WORK);
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
