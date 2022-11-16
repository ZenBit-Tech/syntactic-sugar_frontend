import { Container } from './form-header.styled';
import { StyledTitle, StyledParagraph } from '@freelance/components';

export interface FormHeaderProps {
  title: React.ReactNode;
  subTitle: React.ReactNode;
  isSignForm: boolean;
}

export function FormHeader({ title, subTitle, isSignForm }: FormHeaderProps) {
  return (
    <Container>
      <StyledTitle tag="h2" fontWeight={800} fontSize="md">
        {title}
      </StyledTitle>
      {isSignForm && <img id="logo" src="/assets/images/logo.png" alt="logo" />}
      <StyledParagraph fontSize="md">
        <strong>{subTitle}</strong>
      </StyledParagraph>
    </Container>
  );
}

export default FormHeader;
