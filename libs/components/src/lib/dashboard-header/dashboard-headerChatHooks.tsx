import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetChatsByUserQuery } from "redux/chat/chatApi";

interface IUseChat {
	openChat: () => void;
	closeChat: () => void;
	chatModalOpen: boolean;
}

export const useChat = (): IUseChat => {
	const { t } = useTranslation();
	const [chatModalOpen, setChatModalOpen] = useState<boolean>(false);
	const { refetch } = useGetChatsByUserQuery();

	const openChat = (): void => {
		refetch();
		setChatModalOpen(true);
	};
	const closeChat = (): void => {
		setChatModalOpen(false);
	};

	return {
		chatModalOpen,
		openChat,
		closeChat,
	};
};
