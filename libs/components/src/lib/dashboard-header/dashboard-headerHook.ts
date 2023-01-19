import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IResponseEmployer } from "redux/createEmployer/employerApi";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { DEFAULT_IMAGE } from "utils/constants/links";

interface IUseDashboardHeader {
	imageUrl: string;
	existingImage: string;
	name: string;
	email: string;
	isEditModalOpen: boolean;
	isImageChanged: boolean;
	isFormChange: boolean;
	setIsFormChange: React.Dispatch<React.SetStateAction<boolean>>;
	setIsImageChanged: React.Dispatch<React.SetStateAction<boolean>>;
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
	openEditProfileModal: () => void;
	closeEditProofileModal: () => void;
}

export const useDashboardHeader = (
	profile?: IResponse | IResponseEmployer,
): IUseDashboardHeader => {
	const { t } = useTranslation();
	const [imageUrl, setImageUrl] = useState<string>(DEFAULT_IMAGE);
	const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
	const [isImageChanged, setIsImageChanged] = useState<boolean>(false);
	const [isFormChange, setIsFormChange] = useState<boolean>(false);

	const existingImage: string =
		profile?.image && profile?.image?.length > 0 ? profile?.image : DEFAULT_IMAGE;
	const name: string = profile ? profile.fullName : t("loading");
	const email: string = profile ? profile.user.email : t("loading");

	const openEditProfileModal = () => {
		setIsEditModalOpen(true);
	};

	const closeEditProofileModal = () => {
		setIsEditModalOpen(false);
		setIsFormChange(false);
		setIsImageChanged(false);
		setImageUrl(existingImage);
	};

	return {
		imageUrl,
		existingImage,
		name,
		email,
		setImageUrl,
		setIsImageChanged,
		isEditModalOpen,
		isImageChanged,
		isFormChange,
		setIsFormChange,
		openEditProfileModal,
		closeEditProofileModal,
	};
};
