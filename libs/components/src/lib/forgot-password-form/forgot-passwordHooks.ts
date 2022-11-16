import { useSendLinkEmailMutation } from 'redux/reset-password/reset-password-slice';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { IFormInputs } from './interfaces';

export function useForgotPasswordSendEmail() {
  const [sendLinkEmail, { isLoading }] = useSendLinkEmailMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInputs> = async data => {
    try {
      const result = await sendLinkEmail(data);
      'data' in result && navigate('/checkyouremail');
      'error' in result && console.log(result.error);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    onSubmit,
    isLoading,
  };
}
