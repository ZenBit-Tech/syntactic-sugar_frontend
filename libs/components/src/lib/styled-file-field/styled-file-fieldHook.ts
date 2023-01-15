import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUploadImageMutation } from "redux/uploadImage/upload-image.api";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";
import { baseUrl } from "utils/constants/redux-query";

interface IUseStyledFileField {
	inputKey: string;
	setDefaultImage: () => void;
	onSubmitFile: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

interface IUseStyledFilefieldParams {
	isOpen: boolean;
	defaultImage: string;
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

export const useStyledFileField = ({
	isOpen,
	defaultImage,
	setImageUrl,
}: IUseStyledFilefieldParams): IUseStyledFileField => {
	const { SERVER_ERROR_MESSAGE } = useJobsValidationErrorMessages();
	const [uploadImage, { data: imageData, isError, isSuccess }] = useUploadImageMutation();
	const [inputKey, setInputKey] = useState<string>("");

	const resetInput = () => {
		const randomString = Math.random().toString(36);

		setInputKey(randomString);
	};

	const setDefaultImage = () => {
		resetInput();
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

		if (isOpen) {
			resetInput();
		}
	}, [isSuccess, isError, imageData?.file, setImageUrl, SERVER_ERROR_MESSAGE, isOpen]);

	return {
		inputKey,
		setDefaultImage,
		onSubmitFile,
	};
};
