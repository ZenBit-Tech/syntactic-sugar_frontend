import { Container } from './message-container.styled';
import { StyledTitle, StyledParagraph } from '@freelance/components';

export interface MessageContainerProps {
  title: React.ReactNode;
  subTitle: React.ReactNode;
  isRightSide: boolean;
  isSignForm: boolean;
}

export function MessageContainer({
  title,
  subTitle,
  isRightSide,
  isSignForm,
}: MessageContainerProps) {
  return (
    <Container isRightSide={isRightSide} isSignForm={isSignForm}>
      <StyledTitle tag="h3" fontWeight={700} fontSize="lg">
        {title}
      </StyledTitle>
      <StyledParagraph fontSize="md">{subTitle}</StyledParagraph>
    </Container>
  );
}

export default MessageContainer;
