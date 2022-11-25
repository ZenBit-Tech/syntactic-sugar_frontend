import { useState } from "react";
import { useResetPasswordMutation } from "redux/reset-password/reset-password-slice";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { IResetPasswordForm, IonSubmitResetPassword } from "./interfaces";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PASSWORD_UPDATED = "/password-updated";
const RECOVER_PASSWORD = "/recover-password";

export function useResetPassword(): IonSubmitResetPassword {
	const { t } = useTranslation();
	const [open, setModalOpen] = useState(false);
	const navigate = useNavigate();
	const { token } = useParams();
	const [resetPassword, { isLoading }] = useResetPasswordMutation();

	const handleModalOk = () => {
		navigate(RECOVER_PASSWORD);
	};
	const handleModalCancel = () => {
		setModalOpen(false);
	};
	const onSubmit: SubmitHandler<IResetPasswordForm> = async ({ password }) => {
		try {
			const result = await resetPassword({ token, password });
			"data" in result && navigate(PASSWORD_UPDATED);
			"error" in result && setModalOpen(true);
		} catch (err) {
			toast.error(t("recoverPassForm.errorMessageServerError"));
		}
	};

	return {
		open,
		handleModalOk,
		handleModalCancel,
		onSubmit,
		isLoading,
	};
}
