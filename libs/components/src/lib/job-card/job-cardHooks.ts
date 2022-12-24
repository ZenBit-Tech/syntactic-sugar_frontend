import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useToggleIsPublishJobMutation } from "redux/jobs";
import { SEND_PROPOSAL_ID } from "utils/constants/links";

interface IUseJobCard {
	handleSendProrposalClick: (id: string) => void;
	handleToggleIsPublishedButton: (id: string) => Promise<void>;
	isTogglingJob: boolean;
}

export const useJobCard = (): IUseJobCard => {
	const navigate = useNavigate();
	const [toggleIsPublishJob, { isLoading: isTogglingJob }] = useToggleIsPublishJobMutation();

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

	return {
		isTogglingJob,
		handleSendProrposalClick,
		handleToggleIsPublishedButton,
	};
};
