import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useToggleIsPublishJobMutation } from "redux/jobs";
import { SEND_PROPOSAL_ID } from "utils/constants/links";

interface IUseJobCard {
	handleSendProrposalClick: (id: string) => void;
	handleToggleIsPublishedButton: (id: string) => Promise<void>;
	isTogglingJob: boolean;
}

export const useJobCard = (isPublished: boolean): IUseJobCard => {
	const { t } = useTranslation();
	const navigate = useNavigate();
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

	useEffect(() => {
		if (isSuccess) toast.success(notification);
		if (isError) toast.error(t("serverErrorMessage"));
	}, [isSuccess, isError]);

	return {
		isTogglingJob,
		handleSendProrposalClick,
		handleToggleIsPublishedButton,
	};
};
