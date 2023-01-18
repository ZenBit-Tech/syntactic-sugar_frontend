import { useState } from "react";

interface IUseFreelancerCard {
	openFreelancerProfile: () => void;
	closeFreelancerProfile: () => void;
	freelancerProfileModalOpen: boolean;
}

export const useFreelancerCard = (): IUseFreelancerCard => {
	const [freelancerProfileModalOpen, setFreelancerProfileModalOpen] = useState<boolean>(false);

	const openFreelancerProfile = (): void => {
		setFreelancerProfileModalOpen(true);
	};

	const closeFreelancerProfile = (): void => {
		setFreelancerProfileModalOpen(false);
	};

	return { openFreelancerProfile, closeFreelancerProfile, freelancerProfileModalOpen };
};
