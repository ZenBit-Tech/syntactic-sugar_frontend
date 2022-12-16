import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginWithGoogleMutation } from "redux/login.api";
import { ROLE_SELECTION, MY_JOBS, SEARCH_WORK } from "src/utils/constants/breakpoint";
import { useGoogleLogin } from "@react-oauth/google";
import { useSignUpMutation } from "redux/signup-googleApi";

export const useGoogleAuthentication = (formType: boolean) => {
	const navigate = useNavigate();
	const [signupUser] = useSignUpMutation();
	const [loginWithGoogle, { data: userData, isSuccess, isError }] = useLoginWithGoogleMutation();

	console.log(userData);
	useEffect(() => {
		if (userData?.role === "GUEST") {
			navigate(ROLE_SELECTION);
		}
		if (userData?.role === "FREELANCER") {
			navigate(SEARCH_WORK);
		}
		if (userData?.role === "EMPLOYER") {
			navigate(MY_JOBS);
		}
	}, [userData]);

	const handleSuccess = useGoogleLogin({
		onSuccess: tokenResponse => {
			if (formType) {
				signupUser({ token: tokenResponse.access_token });
				navigate(ROLE_SELECTION);
			} else {
				loginWithGoogle({ token: tokenResponse.access_token });
			}
		},
	});

	return handleSuccess;
};
