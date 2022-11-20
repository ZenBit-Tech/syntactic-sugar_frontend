import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { FormWrapper } from "./recover-pass-second-form.styled";
import { useTranslation } from "react-i18next";
import { IResetPasswordForm } from "./interfaces";
import { useResetPasswordSchema } from "utils/validations";
import { useResetPassword } from "./recover-pass-second-formHooks";

export const RecoverPasswordSecondForm = () => {
	const { t } = useTranslation();
	const schema = useResetPasswordSchema();
	const { onSubmit, isLoading } = useResetPassword();
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
			<ToastContainer />
		</FormWrapper>
	);
};
