import { useTranslation } from "react-i18next";
import { Form, InputWrapper } from "./login-form.styled";
import { StyledButton, StyledSpan } from "@freelance/components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import { signInSchema } from "utils/validations/loginForm";
import { useLoginMutation } from "redux/login.api";

export function LoginForm() {
	const { t } = useTranslation();
	type Props = InferType<typeof signInSchema>;
	const [login] = useLoginMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Props>({
		resolver: yupResolver(signInSchema),
	});

	const formSubmitHandler = (data: Props) => {
		login(data);
	};

	return (
		<Form onSubmit={handleSubmit(formSubmitHandler)}>
			<InputWrapper>
				<input
					{...register("email")}
					type="email"
					name="email"
					placeholder={t("signForm.placeholderEmail")}
				/>
				{errors?.email && (
					<StyledSpan fontSize="sm" type="validation">
						<strong>{errors?.email?.message}</strong>
					</StyledSpan>
				)}
			</InputWrapper>
			<InputWrapper>
				<input
					{...register("password")}
					type="password"
					name="password"
					placeholder={t("signForm.placeholderPassword")}
				/>
				{errors?.password && (
					<StyledSpan fontSize="sm" type="validation">
						<strong>{errors?.password?.message}</strong>
					</StyledSpan>
				)}
			</InputWrapper>
			<StyledButton buttonSize="lg" buttonColor="redGradient">
				{t("signForm.buttonSignIn")}
			</StyledButton>
		</Form>
	);
}

export default LoginForm;
