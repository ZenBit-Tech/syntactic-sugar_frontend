import { useEffect } from "react";
import { SubmitHandler, UseFormReset } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useUpdateEmployerMutation } from "redux/createEmployer/employerApi";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { IEditEmployerForm } from "./edit-employer-form";

interface IUseEditEmployerFormParams {
	imageUrl: string;
	reset: UseFormReset<IEditEmployerForm>;
	isDirty: boolean;
	isFormChange: boolean;
	setIsFormChange: React.Dispatch<React.SetStateAction<boolean>>;
	setIsImageChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUseEditEmployerForm {
	onSubmit: SubmitHandler<IEditEmployerForm>;
	isLoading: boolean;
}

export const useEditEmployerForm = ({
	imageUrl,
	reset,
	isDirty,
	isFormChange,
	setIsFormChange,
	setIsImageChanged,
}: IUseEditEmployerFormParams): IUseEditEmployerForm => {
	const { t } = useTranslation();
	const [updateEmployer, { isLoading, isSuccess, isError }] = useUpdateEmployerMutation();

	const onSubmit: SubmitHandler<IEditEmployerForm> = async data => {
		const newEmployer = { ...data, image: imageUrl === DEFAULT_IMAGE ? "" : imageUrl };

		await updateEmployer(newEmployer);
		setIsFormChange(false);
		setIsImageChanged(false);
	};

	useEffect(() => {
		isDirty && setIsFormChange(true);
		!isFormChange && reset();
	}, [isDirty, isFormChange, reset, setIsFormChange]);

	useEffect(() => {
		isSuccess && toast.success(t("dashboard.successEdit"));
		isError && toast.error(t("serverErrorMessage"));
	}, [isError, isSuccess, t]);

	return {
		onSubmit,
		isLoading,
	};
};
