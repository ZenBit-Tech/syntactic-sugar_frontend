import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useToggleIsPublishJobMutation } from "redux/jobs";
import { useCreateChatMutation } from "redux/chat/chatApi"
import { SEND_PROPOSAL_ID } from "utils/constants/links";

interface IUseJobCard {
	handleSendProrposalClick: (id: string) => void;
	handleToggleIsPublishedButton: (id: string) => Promise<void>;
	openSendProposal: () => void;
	closeSendProposal: () => void;
	openCreateProposal: () => void;
	closeCreateProposal: () => void;
  openChat: () => void;
  closeChat: () => void;
	isTogglingJob: boolean;
	proposalModalOpen: boolean;
	detailsModalOpen: boolean;
  chatModalOpen: boolean;
}

export const useJobCard = (isPublished: boolean, jobId: string, employerId: string, freelancerId: any): IUseJobCard => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [proposalModalOpen, setProposalModalOpen] = useState<boolean>(false);
	const [detailsModalOpen, setDetailsModalOpen] = useState<boolean>(false);
  const [chatModalOpen, setChatModalOpen] = useState<boolean>(false);
  const [createChat] = useCreateChatMutation();
	const [toggleIsPublishJob, { isLoading: isTogglingJob, isSuccess, isError }] =
		useToggleIsPublishJobMutation();

	const notification = !isPublished
		? t("jobCard.publishedNotification")
		: t("jobCard.closedNotification");

	const handleSendProrposalClick = (id: string): void => {
		navigate(`${SEND_PROPOSAL_ID}/${id}`);
	};

	const handleToggleIsPublishedButton = async (id: string): Promise<void> => {
		try {
			await toggleIsPublishJob(id);
		} catch {
			toast.error("Something went wrong");
		}
	};

	const openSendProposal = (): void => {
		setProposalModalOpen(true);
	}

	const closeSendProposal = (): void => {
		setProposalModalOpen(false);
	}

	const openCreateProposal = (): void => {
		setDetailsModalOpen(true);
	}

	const closeCreateProposal = (): void => {
		setDetailsModalOpen(false);
	}

  const openChat = async (): Promise<void> => {
    try {
      createChat({freelancerId, employerId, jobId})
      setChatModalOpen(true);
    } catch (error) {
      toast.error("Something went wrong");
    }

	};

	const closeChat = (): void => {
		setChatModalOpen(false);
	};

	useEffect(() => {
		if (isSuccess) toast.success(notification);
		if (isError) toast.error(t("serverErrorMessage"));
	}, [isSuccess, isError]);

	return {
		isTogglingJob,
		handleSendProrposalClick,
		handleToggleIsPublishedButton,
		openSendProposal,
		closeSendProposal,
		openCreateProposal,
		closeCreateProposal,
		proposalModalOpen,
		detailsModalOpen,
		chatModalOpen,
		openChat,
		closeChat,
	};
};
