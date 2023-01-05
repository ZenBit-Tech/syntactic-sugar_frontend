import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Proposal, useToggleIsPublishJobMutation } from "redux/jobs";

interface IUseJobCardParams {
	isPublished: boolean;
}

interface IUseJobCard {
	handleToggleIsPublishedButton: (id: string) => Promise<void>;
	handleEditJob: (proposal: Proposal[]) => void;
	closeModalEditJob: () => void;
	openSendProposal: () => void;
	closeSendProposal: () => void;
	openCreateProposal: () => void;
	closeCreateProposal: () => void;
	isTogglingJob: boolean;
	isModalEditJob: boolean;
	proposalModalOpen: boolean;
	detailsModalOpen: boolean;
}

export const useJobCard = ({ isPublished }: IUseJobCardParams): IUseJobCard => {
	const { t } = useTranslation();
	const [proposalModalOpen, setProposalModalOpen] = useState<boolean>(false);
	const [detailsModalOpen, setDetailsModalOpen] = useState<boolean>(false);
	const [toggleIsPublishJob, { isLoading: isTogglingJob, isSuccess, isError }] =
		useToggleIsPublishJobMutation();
	const [isModalEditJob, setIsModalEditJob] = useState<boolean>(false);

	const notification = !isPublished
		? t("jobCard.publishedNotification")
		: t("jobCard.closedNotification");

	const handleToggleIsPublishedButton = async (id: string): Promise<void> => {
		try {
			await toggleIsPublishJob(id);
		} catch {
			toast.error(t("serverErrorMessage"));
		}
	};

	const handleEditJob = (proposals: Proposal[]): void => {
		if (proposals.length > 0) {
			toast.error(t("jobCard.canNotEdit"));
			return;
		}

		setIsModalEditJob(true);
	};

	const closeModalEditJob = () => {
		setIsModalEditJob(false);
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
		handleToggleIsPublishedButton,
		handleEditJob,
		closeModalEditJob,
		isTogglingJob,
		isModalEditJob,
		openSendProposal,
		closeSendProposal,
		openCreateProposal,
		closeCreateProposal,
		proposalModalOpen,
		detailsModalOpen,
	};
};
