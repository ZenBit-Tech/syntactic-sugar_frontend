import { Form, InputWrapper } from "./signup-form.styled";
import { useTranslation } from "react-i18next";
import { StyledButton, StyledSpan } from "@freelance/components";
import { InferType } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "utils/validations/registerForm";

export function SignupForm() {
	const { t } = useTranslation();
	type Props = InferType<typeof signUpSchema>;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Props>({
		resolver: yupResolver(signUpSchema),
	});

	const formSubmitHandler = (data: Props) => {
		console.log(data);
		//use rtk query in future of course
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
						{errors?.email?.message}
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
						{errors?.password?.message}
					</StyledSpan>
				)}
			</InputWrapper>
			<InputWrapper>
				<input
					{...register("passwordConfirmation")}
					type="password"
					name="passwordConfirmation"
					placeholder={t("signForm.placeholderConfirmPassword")}
				/>
				{errors?.passwordConfirmation && (
					<StyledSpan fontSize="sm" type="validation">
						{errors?.passwordConfirmation?.message}
					</StyledSpan>
				)}
			</InputWrapper>
			<StyledButton buttonSize="lg" buttonColor="redGradient">
				{t("signForm.buttonSignUp")}
			</StyledButton>
		</Form>
	);
}

export default SignupForm;
