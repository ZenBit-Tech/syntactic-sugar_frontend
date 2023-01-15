import { useState } from "react";
import { IResponseEmployer } from "redux/createEmployer/employerApi";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { baseUrl } from "utils/constants/redux-query";

interface IUseDashboardHeader {
	imageUrl: string;
	existingImage: string;
	name: string;
	email: string;
	isEditModalOpen: boolean;
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
	openEditProfileModal: () => void;
	closeEditProofileModal: () => void;
}

export const useDashboardHeader = (
	profile?: IResponse | IResponseEmployer,
): IUseDashboardHeader => {
	const existingImage: string =
		profile?.image && profile?.image?.length > 0 ? baseUrl + profile?.image : DEFAULT_IMAGE;
	const name: string = profile ? profile.fullName : "...Loading";
	const email: string = profile ? profile.user.email : "...Loading";

	const [imageUrl, setImageUrl] = useState<string>(existingImage);
	const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

	const openEditProfileModal = () => {
		setIsEditModalOpen(true);
	};

	const closeEditProofileModal = () => {
		setIsEditModalOpen(false);
		setImageUrl(existingImage);
	};

	return {
		imageUrl,
		existingImage,
		name,
		email,
		setImageUrl,
		isEditModalOpen,
		openEditProfileModal,
		closeEditProofileModal,
	};
};
