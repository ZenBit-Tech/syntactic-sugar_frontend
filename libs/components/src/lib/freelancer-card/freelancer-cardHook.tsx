import { useState } from "react";

interface IUseFreelancerCard {
	openFreelancerProfile: () => void;
	closeFreelancerProfile: () => void;
	openInvitationModal: () => void;
	closeInvitationModal: () => void;
	freelancerProfileModalOpen: boolean;
	invitationModalOpen: boolean;
}

export const useFreelancerCard = (): IUseFreelancerCard => {
	const [freelancerProfileModalOpen, setFreelancerProfileModalOpen] = useState<boolean>(false);
	const [invitationModalOpen, setInvitationModalOpen] = useState<boolean>(false);

	const openFreelancerProfile = (): void => {
		setFreelancerProfileModalOpen(true);
	};

	const closeFreelancerProfile = (): void => {
		setFreelancerProfileModalOpen(false);
	};

	const openInvitationModal = (): void => {
		setInvitationModalOpen(true);
	};

	const closeInvitationModal = (): void => {
		setInvitationModalOpen(false);
	};

	return {
		openFreelancerProfile,
		closeFreelancerProfile,
		freelancerProfileModalOpen,
		openInvitationModal,
		closeInvitationModal,
		invitationModalOpen,
	};
};
