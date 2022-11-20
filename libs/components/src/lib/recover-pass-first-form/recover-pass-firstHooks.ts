import { useSendLinkEmailMutation } from 'redux/reset-password/reset-password-slice';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { IForgotPasswordForm, IonSubmitForgotPassword } from './interfaces';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CHECK_YOUR_EMAIL_PAGE = '/check-your-email';

export function useForgotPasswordSendEmail(): IonSubmitForgotPassword {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [sendLinkEmail, { isLoading }] = useSendLinkEmailMutation();
  const onSubmit: SubmitHandler<IForgotPasswordForm> = async data => {
    try {
      const result = await sendLinkEmail(data);
      'data' in result && navigate(CHECK_YOUR_EMAIL_PAGE);
      'error' in result && toast.error(t('recoverPassForm.errorMessageWrongEmail'));
    } catch (err) {
      toast.error(t('recoverPassForm.errorMessageServerError'));
    }
  };

  return {
    onSubmit,
    isLoading,
  };
}
