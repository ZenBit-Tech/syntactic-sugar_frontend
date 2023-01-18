import { useEffect } from "react";
import { toast } from "react-toastify";
import { IResponse, useGetFreelancerQuery } from "redux/createFreelancer/freelancer-pageApi";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";

interface IUseEditFreelancerProfileParams {
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

interface IUseEditFreelancerProfile {
	data?: IResponse;
	isLoading: boolean;
}

export const useEditFreelancerProfile = ({
	setImageUrl,
}: IUseEditFreelancerProfileParams): IUseEditFreelancerProfile => {
	const { SERVER_ERROR_MESSAGE } = useJobsValidationErrorMessages();
	const { data, isLoading, isError, isSuccess } = useGetFreelancerQuery();

	useEffect(() => {
		isSuccess && setImageUrl(data.image ? data.image : "");
		isError && toast.error(SERVER_ERROR_MESSAGE);
	}, [SERVER_ERROR_MESSAGE, isSuccess, isError, data?.image, setImageUrl]);

	return {
		data,
		isLoading,
	};
};
