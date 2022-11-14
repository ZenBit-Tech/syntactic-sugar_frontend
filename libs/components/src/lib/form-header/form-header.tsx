import { StyledTitle, StyledParagraph } from '@freelance/components';

/* eslint-disable-next-line */
export interface FormHeaderProps {
  title: React.ReactNode;
  subTitle: React.ReactNode;
  isSignForm: boolean;
}

export function FormHeader({ title, subTitle, isSignForm }: FormHeaderProps) {
  return (
    <>
      <StyledTitle tag="h2" fontWeight={800} fontSize="md">
        {title}
      </StyledTitle>
      {isSignForm && <img id="logo" src="/assets/images/logo.png" alt="logo" />}
      <StyledParagraph fontSize="md"><strong>{subTitle}</strong></StyledParagraph>
    </>
  );
}

export default FormHeader;
