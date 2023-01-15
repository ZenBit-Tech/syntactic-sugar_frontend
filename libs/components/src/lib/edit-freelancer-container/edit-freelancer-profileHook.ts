import { useEffect } from "react";
import { toast } from "react-toastify";
import { useGetFreelancerQuery } from "redux/createFreelancer/freelancer-pageApi";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";
import { baseUrl } from "utils/constants/redux-query";

interface IUseEditFreelancerProfileParams {
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

export const useEditFreelancerProfile = ({
	setImageUrl,
}: IUseEditFreelancerProfileParams): void => {
	const { SERVER_ERROR_MESSAGE } = useJobsValidationErrorMessages();
	const { data, isError, isSuccess } = useGetFreelancerQuery();

	useEffect(() => {
		if (isSuccess) {
			setImageUrl(baseUrl + "/" + data?.image);
		}

		if (isError) {
			toast.error(SERVER_ERROR_MESSAGE);
		}
	}, [SERVER_ERROR_MESSAGE, isSuccess, isError, data?.image, setImageUrl]);
};
