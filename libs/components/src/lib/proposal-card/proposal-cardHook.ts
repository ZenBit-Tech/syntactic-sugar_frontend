import { useState } from "react";

interface IUseProposalCard {
	openProfileModal: () => void;
	closeProfileModal: () => void;
	isProfileOpen: boolean;
	openLetterModal: () => void;
	closeLetterModal: () => void;
	isLetterOpen: boolean;
}

export const useProposalCard = (): IUseProposalCard => {
	const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
	const [isLetterOpen, setisLetterOpen] = useState<boolean>(false);

	const openProfileModal = () => {
		setIsProfileOpen(true);
	};

	const closeProfileModal = () => {
		setIsProfileOpen(false);
	};

	const openLetterModal = () => {
		setisLetterOpen(true);
	};

	const closeLetterModal = () => {
		setisLetterOpen(false);
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
