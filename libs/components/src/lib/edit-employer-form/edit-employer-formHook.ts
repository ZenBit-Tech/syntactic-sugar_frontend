import { SubmitHandler } from "react-hook-form";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { IEditEmployerForm } from "./edit-employer-form";

interface IUseEditEmployerFormParams {
	imageUrl: string;
}

interface IUseEditEmployerForm {
	onSubmit: SubmitHandler<IEditEmployerForm>;
}

export const useEditEmployerForm = ({
	imageUrl,
}: IUseEditEmployerFormParams): IUseEditEmployerForm => {
	const onSubmit: SubmitHandler<IEditEmployerForm> = data => {
		const newImage = imageUrl === DEFAULT_IMAGE ? "" : imageUrl;

		console.log({ data, newImage });
	};

	return {
		onSubmit,
	};
};
