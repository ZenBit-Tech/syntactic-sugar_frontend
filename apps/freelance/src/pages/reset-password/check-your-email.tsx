import { useTranslation } from 'react-i18next';
import { StyledTitle } from '@freelance/components';
import { Container } from './reset-password.styled';

export const CheckYourEmail = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <StyledTitle tag="h1" fontWeight={400} fontSize="md">
        {t('resetPasswordPage.checkYourEmail')}
      </StyledTitle>
    </Container>
  );
};
