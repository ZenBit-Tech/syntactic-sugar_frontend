import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { Form, InputWrapper } from "./recover-pass-second-form.styled";
import { useTranslation } from "react-i18next";
import { IResetPasswordForm } from "./interfaces";
import { useResetPasswordSchema } from "utils/validations";
import { useResetPassword } from "./recover-pass-second-formHooks";
import { StyledButton, StyledSpan } from "@freelance/components";

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
		<Form onSubmit={handleSubmit(onSubmit)}>
			<InputWrapper>
				<input
					type="password"
					placeholder={t("recoverPassForm.inputNewPassword")}
					{...register("password")}
				/>
				{errors?.password && (
					<StyledSpan fontSize="sm" type="validation">
						<strong>{errors?.password?.message}</strong>
					</StyledSpan>
				)}
			</InputWrapper>
			<InputWrapper>
				<input
					type="password"
					placeholder={t("recoverPassForm.confirmNewPassword")}
					{...register("passConfirm")}
				/>
				{errors.passConfirm && (
					<StyledSpan fontSize="sm" type="validation">
						{errors.passConfirm?.message}
					</StyledSpan>
				)}
			</InputWrapper>
			<StyledButton buttonSize="lg" buttonColor="redGradient" disabled={isLoading}>
				{isLoading
					? t("recoverPassForm.updatingPassword")
					: t("recoverPassForm.submitResetPassword")}
			</StyledButton>
			<ToastContainer />
		</Form>
	);
};
