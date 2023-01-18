import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { CardModal, StyledButton, StyledSpan, TermsPrivacyPolicy } from "@freelance/components";
import { useSignUpSchema } from "utils/validations/registerForm";
import { useSignUpByEmailMutation } from "redux/signup-googleApi";
import { setUserData } from "redux/userState/userSlice";
import { Form, InputWrapper, CheckboxWrapper } from "./signup-form.styled";
import { useModal } from "./hooks";

export function SignupForm() {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const signUpSchema = useSignUpSchema();
	const [registration, { data: userData, isSuccess, isError }] = useSignUpByEmailMutation();
	const { openPrivacyPolicyModal, closePrivacyPolicyModal, privacyPolicyModal } = useModal();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Props>({
		resolver: yupResolver(signUpSchema),
	});

	type Props = InferType<typeof signUpSchema>;

	const formSubmitHandler = async (data: Props) => {
		try {
			await registration(data);
			reset();
		} catch (error) {
			toast.error(t("recoverPassForm.errorMessageServerError"));
		}
	};

	useEffect(() => {
		if (isSuccess) {
			dispatch(setUserData({ token: userData?.token, role: userData?.role }));
			toast(t("signForm.confirmMessage"), { position: toast.POSITION.TOP_LEFT, toastId: "1" });
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
			<InputWrapper>
				<CheckboxWrapper>
					<input {...register("agreement")} type="checkbox" name="agreement" />
					<label htmlFor="agreement">{t("signForm.agree")}</label>
					<a onClick={openPrivacyPolicyModal}>
						<strong>{t("signForm.policyLink")}</strong>
					</a>
				</CheckboxWrapper>
				{errors?.agreement && (
					<StyledSpan fontSize="sm" type="validation">
						{errors?.agreement?.message}
					</StyledSpan>
				)}
			</InputWrapper>
			<StyledButton buttonSize="lg" buttonColor="redGradient" type="submit">
				{t("signForm.buttonSignUp")}
			</StyledButton>
			<CardModal open={privacyPolicyModal} onCancel={closePrivacyPolicyModal} width={500}>
				<TermsPrivacyPolicy onCancel={closePrivacyPolicyModal} />
			</CardModal>
			<ToastContainer autoClose={false} />
		</Form>
	);
}

export default SignupForm;
