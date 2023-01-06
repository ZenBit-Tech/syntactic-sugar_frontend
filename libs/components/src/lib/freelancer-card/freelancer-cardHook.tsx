import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useToggleIsPublishJobMutation } from "redux/jobs";
// import { SEND_PROPOSAL_ID } from "utils/constants/links";

interface IUseFreelancerCard {
	openFreelancerProfile: () => void;
	closeFreelancerProfile: () => void;
	freelancerProfileModalOpen: boolean;
}

export const useFreelancerCard = (): IUseFreelancerCard => {
	const { t } = useTranslation();
	const [freelancerProfileModalOpen, setFreelancerProfileModalOpen] = useState<boolean>(false);

	const openFreelancerProfile = (): void => {
		setFreelancerProfileModalOpen(true);
	};

	const closeFreelancerProfile = (): void => {
		setFreelancerProfileModalOpen(false);
	};

	return { openFreelancerProfile, closeFreelancerProfile, freelancerProfileModalOpen };
};
