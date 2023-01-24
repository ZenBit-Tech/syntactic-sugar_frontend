import { useTranslation } from "react-i18next";
import { StyledButton, StyledTitle } from "@freelance/components";
import { IMessage } from "redux/chat/chatApi";
import ChatMessage from "./chat-message";
import { ChatUserCard } from "./chat-user-card";
import {
	ChatArea,
	ChatButtonArea,
	ChatContainer,
	ChatHeaderArea,
	ChatInput,
	ChatMessagesArea,
	ChatTextArea,
	UserChatsList,
	ChatNoConversation,
} from "./chat.styled";
import { useChatHook } from "./chatHooks";
import ChatHeader from "./chat-header";

export interface ChatProps {
	userType: string;
	userId?: string;
}

export function Chat({ userType, userId }: ChatProps) {
	const { t } = useTranslation();
	const {
		handleChange,
		handleSendMessage,
		message,
		userChats,
		userImage,
		setCurrentChat,
		currentChat,
		setMessages,
		messages,
		isSuccess,
		refetch,
	} = useChatHook({ userId, userType });

	if (isSuccess && userChats && userChats?.length > 0) {
		return (
			<ChatContainer>
				<UserChatsList>
					{userChats?.map(chat => {
						return (
							<ChatUserCard
								chat={chat}
								userType={userType}
								setCurrentChat={setCurrentChat}
								setMessages={setMessages}
								messages={messages}
								isActive={chat.id === currentChat?.id}
							/>
						);
					})}
				</UserChatsList>
				<ChatArea>
					<ChatHeaderArea>
						<ChatHeader chat={currentChat} userType={userType} refetch={refetch} />
					</ChatHeaderArea>
					<ChatMessagesArea>
						{messages &&
							messages?.map((message: IMessage) => {
								return (
									<ChatMessage
										isOwnMessage={message.sender === userId}
										message={message}
										userImage={userImage}
									/>
								);
							})}
					</ChatMessagesArea>
					<ChatTextArea>
						<ChatInput value={message} onChange={handleChange} />
						<ChatButtonArea>
							<StyledButton
								buttonColor="redGradient"
								buttonSize="sm"
								fontSize="md"
								onClick={handleSendMessage}
							>
								{t("chat.send")}
							</StyledButton>
						</ChatButtonArea>
					</ChatTextArea>
				</ChatArea>
			</ChatContainer>
		);
	}

	return (
		<ChatNoConversation>
			<StyledTitle tag="h3" fontWeight={400} fontSize="md">
				<strong>{t("chat.noConversations")}</strong>
			</StyledTitle>
		</ChatNoConversation>
	);
}

export default Chat;
