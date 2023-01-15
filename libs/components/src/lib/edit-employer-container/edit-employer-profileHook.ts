import { useEffect } from "react";
import { toast } from "react-toastify";
import { useGetEmployerQuery } from "redux/createEmployer/employerApi";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";
import { baseUrl } from "utils/constants/redux-query";

interface IUseEditEmployerProfileParams {
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

export const useEditEmployerProfile = ({ setImageUrl }: IUseEditEmployerProfileParams): void => {
	const { SERVER_ERROR_MESSAGE } = useJobsValidationErrorMessages();
	const { data, isError, isSuccess } = useGetEmployerQuery();

	useEffect(() => {
		if (isSuccess) {
			setImageUrl(baseUrl + "/" + data?.image);
		}

		if (isError) {
			toast.error(SERVER_ERROR_MESSAGE);
		}
	}, [SERVER_ERROR_MESSAGE, isSuccess, isError, data?.image, setImageUrl]);
};
