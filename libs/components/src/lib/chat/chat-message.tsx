import moment from "moment";
import {
	ChatMessageContainer,
	ChatMessageContent,
	ChatMessageDate,
	ChatMessageText,
	ChatMessageTextContent,
	ChatUserImage,
} from "./chat.styled";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { baseUrl } from "utils/constants/redux-query";
import { IMessage } from "redux/chat/chatApi";

export interface ChatMessageProps {
	isOwnMessage?: boolean;
	message: IMessage;
  userImage?: string;
}

export function ChatMessage({ isOwnMessage, message, userImage }: ChatMessageProps) {
	return (
		<ChatMessageContainer isOwnMessage={isOwnMessage}>
			<ChatMessageContent>
				{!isOwnMessage && (
					<ChatUserImage src={(userImage as string).length > 0 ? baseUrl + "/" + userImage : DEFAULT_IMAGE} />
				)}
				<ChatMessageTextContent>
					<ChatMessageText isOwnMessage={isOwnMessage}>{message.text}</ChatMessageText>
					<ChatMessageDate>{moment(message.createdAt).format("LL")}</ChatMessageDate>
				</ChatMessageTextContent>
			</ChatMessageContent>
		</ChatMessageContainer>
	);
}

export default ChatMessage;
