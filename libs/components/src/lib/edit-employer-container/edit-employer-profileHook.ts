import { useEffect } from "react";
import { toast } from "react-toastify";
import { useGetEmployerQuery } from "redux/createEmployer/employerApi";
import { IEmployerResponse } from "redux/jobs";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";

interface IUseEditEmployerProfileParams {
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

interface IUseEditEmployerProfile {
	data?: IEmployerResponse;
	isFetching: boolean;
}

export const useEditEmployerProfile = ({
	setImageUrl,
}: IUseEditEmployerProfileParams): IUseEditEmployerProfile => {
	const { SERVER_ERROR_MESSAGE } = useJobsValidationErrorMessages();
	const { data, isFetching, isError, isSuccess } = useGetEmployerQuery();

	useEffect(() => {
		isSuccess && setImageUrl(data.image ? data.image : "");
		isError && toast.error(SERVER_ERROR_MESSAGE);
	}, [SERVER_ERROR_MESSAGE, isSuccess, isError, data?.image, setImageUrl]);

	return {
		data,
		isFetching,
	};
};
