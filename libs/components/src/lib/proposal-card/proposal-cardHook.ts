import { useState } from "react";

interface IUseProposalCard {
	openProfileModal: () => void;
	closeProfileModal: () => void;
	isProfileOpen: boolean;
	openLetterModal: () => void;
	closeLetterModal: () => void;
	isLetterOpen: boolean;
}

interface IUseProposalCardParams {
	closeProposalsList?: () => void;
	openProposalsList?: () => void;
}

export const useProposalCard = ({
	closeProposalsList,
	openProposalsList,
}: IUseProposalCardParams): IUseProposalCard => {
	const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
	const [isLetterOpen, setisLetterOpen] = useState<boolean>(false);

	const openProfileModal = () => {
		setIsProfileOpen(true);
		closeProposalsList && closeProposalsList();
	};

	const closeProfileModal = () => {
		setIsProfileOpen(false);
		openProposalsList && openProposalsList();
	};

	const openLetterModal = () => {
		setisLetterOpen(true);
		closeProposalsList && closeProposalsList();
	};

	const closeLetterModal = () => {
		setisLetterOpen(false);
		openProposalsList && openProposalsList();
	};

	return {
		openProfileModal,
		closeProfileModal,
		isProfileOpen,
		openLetterModal,
		closeLetterModal,
		isLetterOpen,
	};
};
