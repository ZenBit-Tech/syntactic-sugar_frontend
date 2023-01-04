import moment from "moment";
import {
	ChatUserCardContainer,
	ChatUserCardContent,
	ChatUserCardDate,
	ChatUserCardImage,
	ChatUserCardInfo,
	ChatUserCardLastMessage,
	ChatUserCardWork,
} from "./chat.styled";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { IChat } from "redux/chat/chatApi";
import { ROLES } from "utils/constants/roles";
import { baseUrl } from "utils/constants/redux-query";
import { useLazyGetChatMessagesQuery } from "redux/chat/chatApi";
import { useEffect, useState } from "react";

export interface ChatUserCardProps {
	chat: IChat;
	userType: string;
	setCurrentChat: any;
	setMessages: any;
}

export function ChatUserCard({ chat, userType, setCurrentChat, setMessages }: ChatUserCardProps) {
	const userImage = userType === ROLES.FREELANCER ? chat.employer.image : chat.freelancer.image;
	const [getChatMessages, { data: chatMessages, isSuccess }] = useLazyGetChatMessagesQuery();
  const [toggleChatCard, setToggleChatCard] = useState<boolean>(false)

  useEffect(() => {
    setMessages(chatMessages)
  },[toggleChatCard])

	const handleChatUserClick = async () => {
			await getChatMessages(chat.id);
			setCurrentChat(chat);
      setToggleChatCard(!toggleChatCard)
	};
	return (
		<ChatUserCardContainer onClick={handleChatUserClick}>
			<ChatUserCardImage src={userImage.length > 0 ? baseUrl + "/" + userImage : DEFAULT_IMAGE} />
			<ChatUserCardContent>
				<ChatUserCardWork>{chat.job.position}</ChatUserCardWork>
				<ChatUserCardLastMessage>
					{chat.messages ? chat.messages[chat.messages.length - 1]?.text : ""}
				</ChatUserCardLastMessage>
			</ChatUserCardContent>
			<ChatUserCardInfo>
				<ChatUserCardDate>{moment(chat.updatedAt).format("LL")}</ChatUserCardDate>
			</ChatUserCardInfo>
		</ChatUserCardContainer>
	);
}

export default ChatUserCard;
