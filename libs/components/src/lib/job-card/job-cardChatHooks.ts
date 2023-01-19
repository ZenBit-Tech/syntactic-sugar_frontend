import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useCreateChatMutation } from "redux/chat/chatApi";
import { useGetChatsByUserQuery } from "redux/chat/chatApi";
import { useGetJobsQuery } from "redux/jobs";
import { useGetProposalsByJobIdQuery } from "redux/sendProposalFreelancer/proposalApi";

interface ChatHooksProps {
	jobId?: string;
	employerId?: string;
	freelancerId?: string;
}

interface IUseChat {
	openChat: () => void;
	closeChat: () => void;
	continueChat: () => void;
	chatModalOpen: boolean;
}

export const useChat = ({ jobId, employerId, freelancerId }: ChatHooksProps): IUseChat => {
	const { t } = useTranslation();
	const [chatModalOpen, setChatModalOpen] = useState<boolean>(false);
	const [createChat] = useCreateChatMutation();
	const { refetch: refetchChats } = useGetChatsByUserQuery();
	const { refetch: refetchProposals } = useGetProposalsByJobIdQuery(jobId!);
	const { refetch: refetchJobs } = useGetJobsQuery();

	const continueChat = (): void => {
		refetchChats();
		setChatModalOpen(true);
	};

	const openChat = async (): Promise<void> => {
		try {
			await createChat({ freelancerId, employerId, jobId });
			await refetchProposals();
			await refetchJobs();
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
