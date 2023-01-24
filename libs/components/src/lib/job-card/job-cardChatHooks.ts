import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useCreateChatMutation } from "redux/chat/chatApi";
import { useGetChatsByUserQuery } from "redux/chat/chatApi";
import { useGetProposalsByJobIdQuery } from "redux/sendProposalFreelancer/proposalApi";
import { useGetJobsQuery } from "redux/jobs";

interface ChatHooksProps {
	jobId?: string;
	employerId?: string;
	freelancerId?: string;
	closeProposalsList?: () => void;
	openProposalsList?: () => void;
}

interface IUseChat {
	openChat: () => void;
	closeChat: () => void;
	continueChat: () => void;
	chatModalOpen: boolean;
}

export const useChat = ({
	jobId,
	employerId,
	freelancerId,
	closeProposalsList,
	openProposalsList,
}: ChatHooksProps): IUseChat => {
	const { t } = useTranslation();
	const [chatModalOpen, setChatModalOpen] = useState<boolean>(false);
	const [createChat] = useCreateChatMutation();
	const { refetch: refetchChats } = useGetChatsByUserQuery();
	const { refetch: refetchProposals } = useGetProposalsByJobIdQuery(jobId!);
	const { refetch: refetchJobs } = useGetJobsQuery();

	const continueChat = (): void => {
		refetchChats();
		setChatModalOpen(true);
		closeProposalsList && closeProposalsList();
	};

	const openChat = async (): Promise<void> => {
		try {
			await createChat({ freelancerId, employerId, jobId });
			refetchProposals();
			refetchJobs();
			setChatModalOpen(true);
			closeProposalsList && closeProposalsList();
		} catch (error) {
			toast.error(t("serverErrorMessage"));
		}
	};
	const closeChat = (): void => {
		setChatModalOpen(false);
		openProposalsList && openProposalsList();
	};

	return {
		chatModalOpen,
		openChat,
		closeChat,
		continueChat,
	};
};
