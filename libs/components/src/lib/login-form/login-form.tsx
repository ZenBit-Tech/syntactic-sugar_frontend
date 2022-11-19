import { useTranslation } from "react-i18next";
import { Form, InputWrapper } from "./login-form.styled";
import { StyledButton, StyledParagraph } from "@freelance/components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import { signInSchema } from "utils/validations/loginForm";
import { FocusEventHandler, FormEventHandler } from 'react';

/* eslint-disable-next-line */
export interface LoginFormProps {
  isError: boolean;
}

export function LoginForm(isError: LoginFormProps) {
	const { t } = useTranslation();
	type Props = InferType<typeof signInSchema>;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Props>({
		resolver: yupResolver(signInSchema),
	});

	const formSubmitHandler = (data: Props) => {
		console.log(data);
		//use rtk query in future of course
	};

	return (
		<Form onSubmit={handleSubmit(formSubmitHandler)}>
			<InputWrapper isError={true}>
				<input
					{...register("email")}
					type="email"
					name="email"
					placeholder={t("signForm.placeholderEmail")}
				/>
				<StyledParagraph fontSize="sm">
					<strong>{errors?.email?.message}</strong>
				</StyledParagraph>
			</InputWrapper>
			<InputWrapper isError={true}>
				<input
					{...register("password")}
					type="password"
					name="password"
					placeholder={t("signForm.placeholderPassword")}
				/>
				<StyledParagraph fontSize="sm">
					<strong>{errors?.password?.message}</strong>
				</StyledParagraph>
			</InputWrapper>
			<StyledButton buttonSize="lg" buttonColor="redGradient">
				{t("signForm.buttonSignIn")}
			</StyledButton>
		</Form>
	);
}

export default LoginForm;
