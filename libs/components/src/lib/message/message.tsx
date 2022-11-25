import { Container } from "./message.styled";
import { StyledTitle, StyledParagraph } from "@freelance/components";

export interface MessageProps {
	title: React.ReactNode;
	subTitle: React.ReactNode;
	children?: React.ReactNode;
}

export function Message({ title, subTitle, children }: MessageProps) {
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

export default Message;
