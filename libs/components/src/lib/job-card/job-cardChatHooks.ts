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
  refetchProposal?: () => void;
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
  refetchProposal
}: ChatHooksProps): IUseChat => {
	const { t } = useTranslation();
	const [chatModalOpen, setChatModalOpen] = useState<boolean>(false);
	const [createChat] = useCreateChatMutation();
	const { refetch: refetchChats } = useGetChatsByUserQuery();
	const { refetch: refetchJobs } = useGetJobsQuery();

	const continueChat = (): void => {
		refetchChats();
		setChatModalOpen(true);
		closeProposalsList && closeProposalsList();
	};

	const openChat = async (): Promise<void> => {
		try {
			await createChat({ freelancerId, employerId, jobId });
			refetchProposal && refetchProposal();
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
