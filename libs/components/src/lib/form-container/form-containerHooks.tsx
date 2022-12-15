import { useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "redux/signup-googleApi";
import { useLoginWithGoogleMutation } from "redux/login.api";

export const useGoogleAuthentication = (formType: boolean) => {
	const navigate = useNavigate();
	const [signupUser] = useSignUpMutation();
	const [loginWithGoogle, { data: userData, isSuccess, isError }] = useLoginWithGoogleMutation();

	useEffect(() => {
		if (userData?.role === "GUEST") {
			navigate("/role");
		}
		if (userData?.role === "FREELANCER") {
			navigate("/freelancer/searchwork");
		}
		if (userData?.role === "JOB_OWNER") {
			navigate("/employer/my-jobs");
		}
	}, [userData]);

	const handleSuccess = useGoogleLogin({
		onSuccess: tokenResponse => {
			if (formType) {
				signupUser({ token: tokenResponse.access_token });
				navigate("/role");
			} else {
				loginWithGoogle({ token: tokenResponse.access_token });
			}
		},
	});

	return handleSuccess;
};
