import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { InferType } from "yup";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { StyledButton, StyledSpan } from "@freelance/components";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "utils/validations/registerForm";
import { useSignUpByEmailMutation } from "redux/signup-googleApi";
import { setUserData } from "redux/userState/userSlice";
import { UserRoles } from "redux/role.api";
import { ROLE_SELECTION } from "utils/constants/breakpoint";
import { Form, InputWrapper } from "./signup-form.styled";

export function SignupForm() {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	type Props = InferType<typeof signUpSchema>;
	const [registration, { data: userData, isSuccess, isError }] = useSignUpByEmailMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Props>({
		resolver: yupResolver(signUpSchema),
	});

	const formSubmitHandler = async (data: Props) => {
		try {
			await registration(data);
		} catch (error) {
			toast.error(t("recoverPassForm.errorMessageServerError"));
		}
	};

	useEffect(() => {
		if (isSuccess) {
			dispatch(setUserData({ token: userData?.token, role: userData?.role }));
			navigate("/" + ROLE_SELECTION);
		}
		if (isError) {
			toast.error(t("recoverPassForm.errorMessageServerError"));
		}
	}, [isSuccess, isError]);

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
			<ToastContainer />
		</Form>
	);
}

export default SignupForm;
