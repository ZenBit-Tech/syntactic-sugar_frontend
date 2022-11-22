import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { FormWrapper, StyledButtonModal } from "./recover-pass-second-form.styled";
import { useTranslation } from "react-i18next";
import { IResetPasswordForm } from "./interfaces";
import { useResetPasswordSchema } from "utils/validations";
import { useResetPassword } from "./recover-pass-second-formHooks";

import { Modal } from "antd";
import "antd/dist/antd.css";

export const RecoverPasswordSecondForm = () => {
	const { t } = useTranslation();
	const schema = useResetPasswordSchema();
	const { onSubmit, isLoading, open, handleOk, handleCancel } = useResetPassword();
	const {
		register,
		setFocus,
		handleSubmit,
		formState: { errors },
	} = useForm<IResetPasswordForm>({ resolver: yupResolver(schema) });

	useEffect(() => {
		setFocus("password");
	}, [setFocus]);

	return (
		<FormWrapper>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="password"
					placeholder={t("recoverPassForm.inputNewPassword")}
					{...register("password")}
				/>
				{errors.password && <span>{errors.password?.message}</span>}
				<input
					type="password"
					placeholder={t("recoverPassForm.confirmNewPassword")}
					{...register("passConfirm")}
				/>
				{errors.passConfirm && <span>{errors.passConfirm?.message}</span>}
				<button type="submit" disabled={isLoading}>
					{isLoading
						? t("recoverPassForm.updatingPassword")
						: t("recoverPassForm.submitResetPassword")}
				</button>
			</form>
			<Modal
				open={open}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<StyledButtonModal
						key="submit"
						buttonSize="modal"
						buttonColor="redGradient"
						onClick={handleOk}
					>
						Try again
					</StyledButtonModal>,
					<StyledButtonModal
						key="cancel"
						buttonSize="modal"
						buttonColor="redGradient"
						onClick={handleCancel}
					>
						Cancel
					</StyledButtonModal>,
				]}
			>
				<h1>Your link has broken or has expired. Please, try again</h1>
			</Modal>
			<ToastContainer />
		</FormWrapper>
	);
};
