import {useGoogleLogin} from "@react-oauth/google";
// import {TokenResponse, CodeResponse} from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import {useSignUpMutation} from "apps/freelance/src/redux/signup-googleApi";
 
function useGoogleAuthentication() {
    const navigate = useNavigate();
    const [signupUser] = useSignUpMutation();

    const handleSuccess = useGoogleLogin({
        onSuccess: tokenResponse => {

            if(tokenResponse) {
                console.log(tokenResponse)
            signupUser(tokenResponse.access_token)
             navigate("/role");
            }
        },
    });
      
  return {
    handleSuccess,
  }
}
 
export default useGoogleAuthentication;