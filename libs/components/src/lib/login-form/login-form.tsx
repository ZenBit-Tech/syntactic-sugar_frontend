import { useTranslation } from "react-i18next";
import { Form } from "./login-form.styled";
import { StyledButton } from "@freelance/components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import { signInSchema } from "utils/validations/loginForm";
import { useLoginMutation } from "redux/login.api";

/* eslint-disable-next-line */
export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
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
			<input
				{...register("email")}
				type="email"
				name="email"
				placeholder={t("signForm.placeholderEmail")}
			/>
			<span>{errors?.email?.message}</span>
			<input
				{...register("password")}
				type="password"
				name="password"
				placeholder={t("signForm.placeholderPassword")}
			/>
			<span>{errors?.password?.message}</span>
			<StyledButton buttonSize="lg" buttonColor="redGradient">
				{t("signForm.buttonSignIn")}
			</StyledButton>
		</Form>
	);
}

export default LoginForm;
