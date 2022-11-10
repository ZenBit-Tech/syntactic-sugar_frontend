// import { StyledSignupButton } from "./signup-google.styled";
// import {useTranslation} from "react-i18next";
import {GoogleLogin} from '@react-oauth/google';
import {useState} from 'react';
import { useAppDispatch } from "apps/freelance/src/redux/example-hooks";

// import jwt_decode from "jwt-decode";


/* eslint-disable-next-line */
export interface SignupGoogleProps {}


export function SignupGoogle(props: SignupGoogleProps) {
  // const {t} = useTranslation(); 
  const [token, setToken] = useState('');
  const dispatch = useAppDispatch();

  return (
    <GoogleLogin
    onSuccess={(credentialResponse) => {
    console.log(credentialResponse);
    // setToken(credentialResponse)
    // const decoded = jwt_decode(credentialResponse.credential);
    // console.log(decoded)
}}
    onError={() => {
    console.log('Login Failed');
}}
    size='medium'
    text='signup_with'/>
    // <StyledSignupButton>{t("signupGoogle.buttonText")}</StyledSignupButton>
  );
}


