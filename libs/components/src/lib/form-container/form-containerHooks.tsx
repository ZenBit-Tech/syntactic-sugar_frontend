import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import { UserRoles } from "redux/role.api";
import { setUserData } from "redux/userState/userSlice";
import { ROLE_SELECTION, SEARCH_WORK } from "utils/constants/breakpoint";
import { useSignUpMutation } from "redux/signup-googleApi";
import { useLoginWithGoogleMutation } from "redux/login.api";
import { EMPLOYER_JOBS_PAGE } from "utils/constants/links";

export const useGoogleAuthentication = (formType: boolean) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [signupUser, { data: userDataGoogle, isSuccess: isSuccessGoogle, isError: isErrorGoogle }] =
		useSignUpMutation();
	const [loginWithGoogle, { data: userData, isSuccess, isError }] = useLoginWithGoogleMutation();

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

	useEffect(() => {
		if (isSuccess) {
			dispatch(
				setUserData({
					token: userData?.token,
					role: userData?.role,
				}),
			);
		}
		if (isError) {
			toast.error(t("recoverPassForm.errorMessageServerError"));
		}
	}, [isSuccess, isError]);

	useEffect(() => {
		if (isSuccessGoogle) {
			dispatch(
				setUserData({
					token: userDataGoogle?.token,
					role: userDataGoogle?.role,
				}),
			);
			navigate("/" + ROLE_SELECTION);
		}
		if (isErrorGoogle) {
			toast.error(t("signupGoogle.error"));
		}
	}, [isSuccessGoogle, isErrorGoogle]);

	const handleSuccess = useGoogleLogin({
		onSuccess: tokenResponse => {
			if (formType) {
				signupUser({ token: tokenResponse.access_token });
			} else {
				loginWithGoogle({ token: tokenResponse.access_token });
			}
		},
	});

	return handleSuccess;
};
