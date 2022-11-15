import  useGoogleAuthentication from "./signup-googleHooks";
import { useTranslation } from 'react-i18next';

export const SignupGoogle = () => {
  const { handleSuccess } = useGoogleAuthentication();
  const {t} = useTranslation();
 
  return (
    <button onClick ={() => handleSuccess()}>{t("signupGoogle.buttonText")}</button>
  );
};

export default SignupGoogle;