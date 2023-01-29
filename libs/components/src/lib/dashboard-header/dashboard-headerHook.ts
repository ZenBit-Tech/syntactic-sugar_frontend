import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IResponseEmployer } from "redux/createEmployer/employerApi";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import {
	INotification,
	useGetChatNotificationsByProfileQuery,
} from "redux/notification/notificationApi";
import io, { Socket } from "socket.io-client";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { baseUrl } from "utils/constants/redux-query";

interface IUseDashboardHeader {
	imageUrl: string;
	existingImage: string;
	name: string;
	email: string;
	chatNotifications: number;
	isEditModalOpen: boolean;
	isImageChanged: boolean;
	isFormChange: boolean;
	setIsFormChange: React.Dispatch<React.SetStateAction<boolean>>;
	setIsImageChanged: React.Dispatch<React.SetStateAction<boolean>>;
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
	openEditProfileModal: () => void;
	closeEditProofileModal: () => void;
}

let socket: Socket;

export const useDashboardHeader = (
	profile?: IResponse | IResponseEmployer,
): IUseDashboardHeader => {
	const { t } = useTranslation();
	const { data: chatNotificationsByProfile, isSuccess } = useGetChatNotificationsByProfileQuery();
	const [imageUrl, setImageUrl] = useState<string>(DEFAULT_IMAGE);
	const [chatNotifications, setChatNotifications] = useState<number>(0);
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

	useEffect(() => {
		if (isSuccess) {
			const notifications = chatNotificationsByProfile.filter(
				item => item.message.sender !== profile?.id,
			);

			setChatNotifications(notifications.length);
		}
	}, [chatNotificationsByProfile, isSuccess, profile?.id, setChatNotifications]);

	useEffect(() => {
		socket = io(baseUrl);
		socket.on("notification", (notifications: INotification[]) => {
			const filteredNotifications = notifications.filter(
				item => item.message.sender !== profile?.id,
			);

			setChatNotifications(filteredNotifications.length);
		});

		return () => {
			socket.off("notification");
		};
	}, [profile?.id]);

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
		chatNotifications,
		setIsFormChange,
		openEditProfileModal,
		closeEditProofileModal,
	};
};
