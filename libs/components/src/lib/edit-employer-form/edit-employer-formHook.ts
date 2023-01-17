import { useEffect } from "react";
import { SubmitHandler, UseFormReset } from "react-hook-form";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { IEditEmployerForm } from "./edit-employer-form";

interface IUseEditEmployerFormParams {
	imageUrl: string;
	reset: UseFormReset<IEditEmployerForm>;
	isFormChange: boolean;
	setIsFormChange: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUseEditEmployerForm {
	onSubmit: SubmitHandler<IEditEmployerForm>;
}

export const useEditEmployerForm = ({
	imageUrl,
	reset,
	isFormChange,
	setIsFormChange,
}: IUseEditEmployerFormParams): IUseEditEmployerForm => {
	const onSubmit: SubmitHandler<IEditEmployerForm> = data => {
		const newImage = imageUrl === DEFAULT_IMAGE ? "" : imageUrl;

		console.log({ data, newImage });
	};

	useEffect(() => {
		setIsFormChange(true);
		!isFormChange && reset();
	}, [isFormChange, reset, setIsFormChange]);

	return {
		onSubmit,
	};
};
