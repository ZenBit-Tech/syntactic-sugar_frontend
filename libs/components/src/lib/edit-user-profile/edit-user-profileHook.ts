import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUploadImageMutation } from "redux/uploadImage/upload-image.api";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";
import { baseUrl } from "utils/constants/redux-query";

interface IUseEditUserProfile {
	imageUrl: string;
	inputKey: string;
	setDefaultImage: () => void;
	onSubmitFile: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export const useEditUserProfile = (defaultImage: string): IUseEditUserProfile => {
	const { SERVER_ERROR_MESSAGE } = useJobsValidationErrorMessages();
	const [imageUrl, setImageUrl] = useState<string>(defaultImage);
	const [inputKey, setInputKey] = useState<string>("");
	const [uploadImage, { data: imageData, isError, isSuccess }] = useUploadImageMutation();

	const setDefaultImage = () => {
		const randomString = Math.random().toString(36);

		setInputKey(randomString);
		setImageUrl(defaultImage);
	};

	const onSubmitFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
		try {
			if (!event.currentTarget.files) return;

			const formData = new FormData();

			formData.append("file", event.currentTarget.files[0]);
			await uploadImage(formData);
		} catch (error) {
			alert(error);
		}
	};

	useEffect(() => {
		if (isSuccess) {
			setImageUrl(baseUrl + "/" + imageData?.file);
		}
		if (isError) {
			toast.error(SERVER_ERROR_MESSAGE);
		}
	}, [isSuccess, isError, imageData?.file, SERVER_ERROR_MESSAGE]);

	return {
		inputKey,
		imageUrl,
		setDefaultImage,
		onSubmitFile,
	};
};
