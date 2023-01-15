import { useState } from "react";

interface IUseEditProfile {
	isEditModalOpen: boolean;
	openEditProfileModal: () => void;
	closeEditProofileModal: () => void;
}

export const useEditProfile = (): IUseEditProfile => {
	const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

	const openEditProfileModal = () => {
		setIsEditModalOpen(true);
	};

	const closeEditProofileModal = () => {
		setIsEditModalOpen(false);
	};

	return {
		isEditModalOpen,
		openEditProfileModal,
		closeEditProofileModal,
	};
};
