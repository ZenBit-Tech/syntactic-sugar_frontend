import {useGoogleLogin} from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "redux/signup-googleApi";
 
export const  useGoogleAuthentication = () => {
  const navigate = useNavigate();
  const [signupUser] = useSignUpMutation();

  const handleSuccess = useGoogleLogin({
      onSuccess: tokenResponse => {
        signupUser({ token: tokenResponse.access_token });
        navigate("/role");
        }
      })
  return { handleSuccess };

};
