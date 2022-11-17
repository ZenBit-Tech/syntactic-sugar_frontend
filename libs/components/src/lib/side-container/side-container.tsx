import { Container } from './side-container.styled';
import { StyledTitle, StyledParagraph } from '@freelance/components';

export interface SideContainerProps {
  title: React.ReactNode;
  subTitle: React.ReactNode;
  children?: React.ReactNode;
}

export function SideContainer({ title, subTitle, children }: SideContainerProps) {
  return (
    <Container>
      <StyledTitle tag="h1" fontWeight={800} fontSize="lg">
        {title}
      </StyledTitle>
      <StyledParagraph fontSize="lg">{subTitle}</StyledParagraph>
      {children}
    </Container>
  );
}

export default SideContainer;
