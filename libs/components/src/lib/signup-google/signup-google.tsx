// import {GoogleLogin} from '@react-oauth/google';
import useGoogleAuthentication from "./signup-googleHooks";
 
export const SignupGoogle = () => {
  const { handleSuccess } = useGoogleAuthentication();
 
  return (
    <button onClick ={() => handleSuccess()}>Sign up with Google</button>
  );
}
 
