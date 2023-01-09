import { useEffect, useState } from "react";
import moment from "moment";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { IChat, IMessage } from "redux/chat/chatApi";
import { ROLES } from "utils/constants/roles";
import { baseUrl } from "utils/constants/redux-query";
import { useLazyGetChatMessagesQuery } from "redux/chat/chatApi";
import {
	ChatUserCardContainer,
	ChatUserCardContent,
	ChatUserCardDate,
	ChatUserCardImage,
	ChatUserCardInfo,
	ChatUserCardLastMessage,
	ChatUserCardWork,
} from "./chat.styled";

export interface ChatUserCardProps {
	chat: IChat;
	userType: string;
	setCurrentChat: any;
	setMessages: any;
	messages: IMessage[];
	userImage?: string;
	isActive?: boolean;
}

export function ChatUserCard({
	chat,
	userType,
	setCurrentChat,
	setMessages,
	messages,
	isActive,
}: ChatUserCardProps) {
	const [getChatMessages, { data: chatMessages, isSuccess }] = useLazyGetChatMessagesQuery();
	const [toggleChatCard, setToggleChatCard] = useState<boolean>(false);
	const userImage = userType === ROLES.FREELANCER ? chat?.employer.image : chat?.freelancer.image;

	useEffect(() => {
		if (isSuccess) {
			setMessages(chatMessages);
		}
	}, [toggleChatCard]);

	const handleChatUserClick = async () => {
		await getChatMessages(chat.id);
		setCurrentChat(chat);
		setToggleChatCard(!toggleChatCard);
	};

	return (
		<ChatUserCardContainer isActive={isActive} onClick={handleChatUserClick}>
			<ChatUserCardImage
				src={userImage && userImage.length > 0 ? baseUrl + "/" + userImage : DEFAULT_IMAGE}
			/>
			<ChatUserCardContent>
				<ChatUserCardWork>
					{userType === ROLES.FREELANCER ? chat.employer.companyName : chat.freelancer.fullName}
				</ChatUserCardWork>
				<ChatUserCardLastMessage>
					{userType === ROLES.FREELANCER ? chat.job.position : chat.freelancer.position}
				</ChatUserCardLastMessage>
			</ChatUserCardContent>
			<ChatUserCardInfo>
				<ChatUserCardDate>{moment(chat.updatedAt).format("LL")}</ChatUserCardDate>
			</ChatUserCardInfo>
		</ChatUserCardContainer>
	);
}

export default ChatUserCard;
