import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { StyledButton } from "@freelance/components";
import { useForgotPasswordSchema } from "utils/validations";
import { IForgotPasswordForm } from "./interfaces";
import { useForgotPasswordSendEmail } from "./recover-pass-firstHooks";
import { Form } from "./recover-pass-first-form.styled";

export function RecoverPassFirstForm() {
	const { t } = useTranslation();
	const schema = useForgotPasswordSchema();
	const { onSubmit, isLoading } = useForgotPasswordSendEmail();
	const {
		register,
		setFocus,
		handleSubmit,
		formState: { errors },
	} = useForm<IForgotPasswordForm>({
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		setFocus("email");
	}, [setFocus]);

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<input type="email" placeholder={t("signForm.placeholderEmail")} {...register("email")} />
			{errors.email && <span>{errors.email?.message}</span>}
			<StyledButton buttonSize="lg" buttonColor="redGradient" disabled={isLoading}>
				{isLoading ? t("recoverPassForm.loader") : t("recoverPassForm.buttonContinue")}
			</StyledButton>
			<ToastContainer />
		</Form>
	);
}

export default RecoverPassFirstForm;
