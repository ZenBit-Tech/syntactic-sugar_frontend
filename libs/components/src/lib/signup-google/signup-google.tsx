import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export const SignupGoogle = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      const tokens = await axios.post('http://localhost:8000/auth/google', {  // http://localhost:3001/auth/google backend that will exchange the code
        code,
      });
  
      console.log(tokens);
    },
    flow: 'auth-code',
  });
  
  return(
  <button onClick={() => googleLogin()}>
    Sign in with Google
  </button>);
}
