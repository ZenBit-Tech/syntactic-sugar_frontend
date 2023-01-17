import { useEffect } from "react";
import { toast } from "react-toastify";
import { useGetEmployerQuery } from "redux/createEmployer/employerApi";
import { IEmployerResponse } from "redux/jobs";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";
import { baseUrl } from "utils/constants/redux-query";

interface IUseEditEmployerProfileParams {
	isOpen: boolean;
	setIsImageChanged: React.Dispatch<React.SetStateAction<boolean>>;
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

interface IUseEditEmployerProfile {
	data?: IEmployerResponse;
	isLoading: boolean;
}

export const useEditEmployerProfile = ({
	isOpen,
	setIsImageChanged,
	setImageUrl,
}: IUseEditEmployerProfileParams): IUseEditEmployerProfile => {
	const { SERVER_ERROR_MESSAGE } = useJobsValidationErrorMessages();
	const { data, isLoading, isError, isSuccess } = useGetEmployerQuery();

	console.log(isOpen);
	useEffect(() => {
		isSuccess && setImageUrl(baseUrl + "/" + data?.image);
		isError && toast.error(SERVER_ERROR_MESSAGE);
		setIsImageChanged(false);
	}, [
		SERVER_ERROR_MESSAGE,
		isSuccess,
		isError,
		data?.image,
		setImageUrl,
		isOpen,
		setIsImageChanged,
	]);

	return {
		data,
		isLoading,
	};
};
