import { StyledSignupGoogle } from "./signup-google.styled";
import { useGoogleLogin } from '@react-oauth/google';
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import { useAppDispatch } from "apps/freelance/src/redux/example-hooks";



/* eslint-disable-next-line */
export interface SignupGoogleProps {}


export function SignupGoogle(props: SignupGoogleProps) {

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);

    },
    onError: errorResponse => console.log(errorResponse),
  });

  const {t} = useTranslation();

  return (
    <StyledSignupGoogle>
     <button type="button" onClick={()=> googleLogin()}>{t("signupGoogle.signUp")}</button>
    </StyledSignupGoogle>
  );
}

export default SignupGoogle;
