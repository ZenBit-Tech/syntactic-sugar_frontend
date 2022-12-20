import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginWithGoogleMutation } from "redux/login.api";
import { toast, ToastContainer } from "react-toastify";
import { UserRoles } from "redux/role.api";
import { setUserData } from "redux/userState/userSlice";
import { ROLE_SELECTION, MY_JOBS, SEARCH_WORK } from "src/utils/constants/breakpoint";
import { useGoogleLogin } from "@react-oauth/google";
import { useSignUpMutation } from "redux/signup-googleApi";

export const useGoogleAuthentication = (formType: boolean) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [signupUser] = useSignUpMutation();
	const [loginWithGoogle, { data: userData, isSuccess, isError }] = useLoginWithGoogleMutation();

	useEffect(() => {
		if (userData?.role === UserRoles.GUEST) {
			navigate(ROLE_SELECTION);
		}
		if (userData?.role === UserRoles.FREELANCER) {
			navigate(SEARCH_WORK);
		}
		if (userData?.role === UserRoles.EMPLOYER) {
			navigate(MY_JOBS);
		}
	}, [userData]);

	useEffect(() => {
		if (isSuccess) {
			dispatch(setUserData({ token: userData?.token, role: userData?.role }));
		}
		if (isError) {
			toast.error(t("recoverPassForm.errorMessageServerError"));
		}
	}, [isSuccess, isError]);

	const handleSuccess = useGoogleLogin({
		onSuccess: tokenResponse => {
			if (formType) {
				signupUser({ token: tokenResponse.access_token });
				navigate("/" + ROLE_SELECTION);
			} else {
				loginWithGoogle({ token: tokenResponse.access_token });
			}
		},
	});

	return handleSuccess;
};
