import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useToggleIsPublishJobMutation } from "redux/jobs";
import { SEND_PROPOSAL_ID } from "utils/constants/links";

interface IUseJobCard {
	handleSendProrposalClick: (id: string) => void;
	handleToggleIsPublishedButton: (id: string) => Promise<void>;
	openSendProposal: () => void;
	closeSendProposal: () => void;
	openCreateProposal: () => void;
	closeCreateProposal: () => void;
	isTogglingJob: boolean;
	proposalModalOpen: boolean;
	detailsModalOpen: boolean;
}

export const useJobCard = (isPublished: boolean): IUseJobCard => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [proposalModalOpen, setProposalModalOpen] = useState<boolean>(false);
	const [detailsModalOpen, setDetailsModalOpen] = useState<boolean>(false);
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
			toast.error(t("serverErrorMessage"));
		}
	};

	const openSendProposal = (): void => {
		setProposalModalOpen(true);
	};

	const closeSendProposal = (): void => {
		setProposalModalOpen(false);
	};

	const openCreateProposal = (): void => {
		setDetailsModalOpen(true);
	};

	const closeCreateProposal = (): void => {
		setDetailsModalOpen(false);
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
	};
};
