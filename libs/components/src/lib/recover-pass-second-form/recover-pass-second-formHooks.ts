import { useState } from "react";
import { useResetPasswordMutation } from "redux/resetPassword/resetPasswordSlice";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PASSWORD_UPDATED_PAGE, RECOVER_PASSWORD_PAGE } from "utils/constants/links";
import { IResetPasswordForm, IonSubmitResetPassword } from "./interfaces";

export function useResetPassword(): IonSubmitResetPassword {
	const { t } = useTranslation();
	const [open, setModalOpen] = useState<boolean>(false);
	const navigate = useNavigate();
	const { token } = useParams();
	const [resetPassword, { isLoading }] = useResetPasswordMutation();

	const handleModalOk = () => {
		navigate(RECOVER_PASSWORD_PAGE);
	};

	const onSubmit: SubmitHandler<IResetPasswordForm> = async ({ password }) => {
		try {
			const result = await resetPassword({ token, password });

			"data" in result && navigate(PASSWORD_UPDATED_PAGE);
			"error" in result && setModalOpen(true);
		} catch (err) {
			toast.error(t("recoverPassForm.errorMessageServerError"));
		}
	};

	return {
		open,
		handleModalOk,
		onSubmit,
		isLoading,
	};
}
