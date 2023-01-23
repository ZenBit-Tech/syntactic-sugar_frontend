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
	isFetching: boolean;
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
	isFetching,
	isFormChange,
	setIsFormChange,
	setIsImageChanged,
}: IUseEditEmployerFormParams): IUseEditEmployerForm => {
	const { t } = useTranslation();
	const [updateEmployer, { isLoading, isSuccess, isError }] = useUpdateEmployerMutation();

	const onSubmit: SubmitHandler<IEditEmployerForm> = async data => {
		try {
			const newEmployer = { ...data, image: imageUrl === DEFAULT_IMAGE ? "" : imageUrl };

			await updateEmployer(newEmployer);
			setIsFormChange(false);
			setIsImageChanged(false);
		} catch {
			toast.error(t("serverErrorMessage"));
		}
	};

	useEffect(() => {
		isDirty && setIsFormChange(true);
	}, [isDirty, setIsFormChange]);

	useEffect(() => {
		!isFormChange && !isFetching && reset();
	}, [isFormChange, reset, isFetching]);

	useEffect(() => {
		isSuccess && toast.success(t("dashboard.successEdit"));
		isError && toast.error(t("serverErrorMessage"));
	}, [isError, isSuccess, t]);

	return {
		onSubmit,
		isLoading,
	};
};
