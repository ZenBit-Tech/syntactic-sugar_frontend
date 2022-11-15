import { Form } from './recover-pass-first-form.styled';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '@freelance/components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RecoverPassFirstFormProps {}

export function RecoverPassFirstForm(props: RecoverPassFirstFormProps) {
  const { t } = useTranslation();

  return (
    <Form>
      <input type="password" name="password" placeholder={t('signForm.placeholderPassword')} />
      <StyledButton buttonSize="lg" buttonColor="redGradient">
        {t('recoverPassForm.buttonContinue')}
      </StyledButton>
    </Form>
  );
}

export default RecoverPassFirstForm;
