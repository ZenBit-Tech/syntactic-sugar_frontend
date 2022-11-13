import { Container } from './message-container.styled';
import { StyledTitle, StyledParagraph } from '@freelance/components';

export interface MessageContainerProps {
  title: React.ReactNode;
  subTitle: React.ReactNode;
  isRightSide: boolean;
}

export function MessageContainer({ title, subTitle, isRightSide }: MessageContainerProps) {
  return (
    <Container isRightSide={isRightSide}>
      <StyledTitle tag="h3" fontWeight={700} fontSize="lg">
        {title}
      </StyledTitle>
      <StyledParagraph fontSize="md">{subTitle}</StyledParagraph>
    </Container>
  );
}

export default MessageContainer;
