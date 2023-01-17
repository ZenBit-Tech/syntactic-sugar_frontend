import { useEffect } from "react";
import { toast } from "react-toastify";
import { useUploadImageMutation } from "redux/uploadImage/upload-image.api";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";

interface IUseStyledFileField {
	setDefaultImage: () => void;
	onSubmitFile: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

interface IUseStyledFilefieldParams {
	defaultImage: string;
	setIsImageChanged: React.Dispatch<React.SetStateAction<boolean>>;
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

export const useStyledFileField = ({
	defaultImage,
	setIsImageChanged,
	setImageUrl,
}: IUseStyledFilefieldParams): IUseStyledFileField => {
	const { SERVER_ERROR_MESSAGE } = useJobsValidationErrorMessages();
	const [uploadImage, { data: imageData, isError, isSuccess }] = useUploadImageMutation();

	const setDefaultImage = () => {
		setIsImageChanged(true);
		setImageUrl(defaultImage);
	};

	const onSubmitFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
		try {
			if (!event.currentTarget.files) return;

			const formData = new FormData();

			formData.append("file", event.currentTarget.files[0]);
			event.currentTarget.value = "";
			await uploadImage(formData);
			setIsImageChanged(true);
		} catch (error) {
			toast.error(SERVER_ERROR_MESSAGE);
		}
	};

	useEffect(() => {
		isSuccess && setImageUrl(imageData ? imageData.file : "");
		isError && toast.error(SERVER_ERROR_MESSAGE);
	}, [isSuccess, isError, imageData?.file, setImageUrl, SERVER_ERROR_MESSAGE, imageData]);

	return {
		setDefaultImage,
		onSubmitFile,
	};
};
