import { useTranslation } from "react-i18next";

export const PasswordUpdated = () => {
  const {t} = useTranslation();
  
  return <h1>{t('recoverPassForm.passwordHasUpdated')}</h1>;
};
