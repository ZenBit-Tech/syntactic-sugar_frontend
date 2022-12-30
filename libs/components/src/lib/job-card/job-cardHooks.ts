import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Proposal, useToggleIsPublishJobMutation } from "redux/jobs";
import { SEND_PROPOSAL_ID } from "utils/constants/links";

interface IUseJobCardParams {
	isPublished: boolean;
}

interface IUseJobCard {
	handleSendProrposalClick: (id: string) => void;
	handleToggleIsPublishedButton: (id: string) => Promise<void>;
	handleEditJob: (proposal: Proposal[]) => void;
	closeModalEditJob: () => void;
	isTogglingJob: boolean;
	isModalEditJob: boolean;
}

export const useJobCard = ({ isPublished }: IUseJobCardParams): IUseJobCard => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [toggleIsPublishJob, { isLoading: isTogglingJob, isSuccess, isError }] =
		useToggleIsPublishJobMutation();
	const [isModalEditJob, setIsModalEditJob] = useState<boolean>(false);

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

	useEffect(() => {
		if (isSuccess) toast.success(notification);
		if (isError) toast.error(t("serverErrorMessage"));
	}, [isSuccess, isError]);

	return {
		handleSendProrposalClick,
		handleToggleIsPublishedButton,
		handleEditJob,
		closeModalEditJob,
		isTogglingJob,
		isModalEditJob,
	};
};
