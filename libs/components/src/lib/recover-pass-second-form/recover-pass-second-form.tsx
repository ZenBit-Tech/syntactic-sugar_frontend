import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { useResetPasswordSchema } from "utils/validations";
import { useResetPassword } from "./recover-pass-second-formHooks";
import { useTranslation } from "react-i18next";
import { IResetPasswordForm } from "./interfaces";
import {
	Form,
	InputWrapper,
	StyledButtonModal,
	StyledModal,
} from "./recover-pass-second-form.styled";
import { StyledButton, StyledSpan, FormHeader } from "@freelance/components";
import "antd/dist/antd.css";

export const RecoverPasswordSecondForm = () => {
	const { t } = useTranslation();
	const schema = useResetPasswordSchema();
	const { onSubmit, isLoading, open, handleModalOk } = useResetPassword();
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
		<>
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
			</Form>
			<StyledModal
				open={open}
				onOk={handleModalOk}
				footer={[
					<StyledButtonModal
						key="submit"
						buttonSize="lg"
						buttonColor="redGradient"
						onClick={handleModalOk}
					>
						{t("recoverPassForm.tryAgainButton")}
					</StyledButtonModal>,
				]}
			>
				<FormHeader
					title={t("recoverPassForm.errorMessageExpiredLinkTitle")}
					subTitle={t("recoverPassForm.errorMessageExpiredLinkSubTitle")}
					isSignForm={false}
				/>
			</StyledModal>
			<ToastContainer />
		</>
	);
};
