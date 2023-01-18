import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InferType } from "yup";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { StyledButton, StyledSpan } from "@freelance/components";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "utils/validations/loginForm";
import { useLoginMutation } from "redux/login.api";
import { useConfirmEmailMutation } from "redux/signup-googleApi";
import { UserRoles } from "redux/role.api";
import { setUserData } from "redux/userState/userSlice";
import { ROLE_SELECTION, SEARCH_WORK } from "utils/constants/breakpoint";
import { EMPLOYER_JOBS_PAGE } from "utils/constants/links";
import { Form, InputWrapper } from "./login-form.styled";

export function LoginForm() {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const id = searchParams.get("id");
	const [login, { data: userData, isSuccess, isError }] = useLoginMutation();
	const [confirmEmail, { isSuccess: isSuccessConfirm, isError: isErrorConfirm }] =
		useConfirmEmailMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Props>({
		resolver: yupResolver(signInSchema),
	});

	type Props = InferType<typeof signInSchema>;

	const formSubmitHandler = async (data: Props) => {
		try {
			await login(data);
		} catch (error) {
			toast.error(t("recoverPassForm.errorMessageServerError"));
		}
	};

	useEffect(() => {
		if (id) {
			confirmEmail({ id: id });
		}
	}, []);

	useEffect(() => {
		if (isSuccessConfirm) {
			toast(t("signForm.confirmation"), { position: toast.POSITION.TOP_LEFT, toastId: "1" });
		}
		if (isErrorConfirm) {
			toast.error(t("recoverPassForm.errorMessageServerError"), {
				position: toast.POSITION.TOP_LEFT,
				toastId: "1",
			});
		}
	}, [isErrorConfirm, isSuccessConfirm]);

	useEffect(() => {
		if (isSuccess) {
			dispatch(setUserData({ token: userData?.token, role: userData?.role }));
		}
		if (isError) {
			toast.error(t("signForm.passwordError"));
		}
	}, [isSuccess, isError]);

	useEffect(() => {
		if (userData?.role === UserRoles.GUEST) {
			navigate(ROLE_SELECTION);
		}
		if (userData?.role === UserRoles.FREELANCER) {
			navigate(SEARCH_WORK);
		}
		if (userData?.role === UserRoles.EMPLOYER) {
			navigate(EMPLOYER_JOBS_PAGE);
		}
	}, [userData]);

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
			<ToastContainer autoClose={false} />
		</Form>
	);
}

export default LoginForm;
