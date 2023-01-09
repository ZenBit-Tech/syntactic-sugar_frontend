import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { IChat, useCreateChatMutation } from "redux/chat/chatApi";
import { useGetChatsByUserQuery } from "redux/chat/chatApi";

interface IUseChat {
	openChat: () => void;
	closeChat: () => void;
	continueChat: () => void;
	chatModalOpen: boolean;
}

export const useChat = (jobId: string, employerId: string, freelancerId: string): IUseChat => {
	const { t } = useTranslation();
	const [chatModalOpen, setChatModalOpen] = useState<boolean>(false);
	const [createChat, { data: chatData, isLoading, isSuccess, isError }] = useCreateChatMutation();
	const { refetch } = useGetChatsByUserQuery();

	const continueChat = (): void => {
		refetch();
		setChatModalOpen(true);
	};

	const openChat = async (): Promise<void> => {
		try {
			await createChat({ freelancerId, employerId, jobId });
			setChatModalOpen(true);
		} catch (error) {
			toast.error(t("serverErrorMessage"));
		}
	};
	const closeChat = (): void => {
		setChatModalOpen(false);
	};

	return {
		chatModalOpen,
		openChat,
		closeChat,
		continueChat,
	};
};
