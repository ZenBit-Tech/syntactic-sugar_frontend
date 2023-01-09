import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import io, { Socket } from "socket.io-client";
import { ROLES } from "utils/constants/roles";
import { baseUrl } from "src/utils/constants/redux-query";
import {
	StyledButton,
	StyledParagraph,
	ParagraphWrapper,
	StyledTitle,
} from "@freelance/components";
import { IChat, IMessage, useGetChatsByUserQuery } from "redux/chat/chatApi";
import ChatMessage from "./chat-message";
import { ChatUserCard } from "./chat-user-card";
import {
	ChatArea,
	ChatButtonArea,
	ChatContainer,
	ChatHeader,
	ChatInput,
	ChatMessagesArea,
	ChatTextArea,
	UserChatsList,
	ChatNoConversation,
} from "./chat.styled";

/* eslint-disable-next-line */
export interface ChatProps {
	userType: string;
	userId?: string;
}

let socket: Socket;

export function Chat({ userType, userId }: ChatProps) {
	const { t } = useTranslation();
	const { data: userChats, isSuccess, isLoading, refetch } = useGetChatsByUserQuery();
	const [currentChat, setCurrentChat] = useState<IChat>();
	const [messages, setMessages] = useState<IMessage[]>([]);
	const [message, setMessage] = useState<string>("");
	const [toggleButton, setToggleButton] = useState<boolean>(false);
	const userImage =
		userType === ROLES.FREELANCER ? currentChat?.employer.image : currentChat?.freelancer.image;
	const chatId = currentChat?.id;

	useEffect(() => {
		if (isSuccess) {
			setCurrentChat(userChats[0]);
			setMessages(userChats[0]?.messages || []);
		}
	}, [isSuccess]);

	useEffect(() => {
		socket = io(baseUrl);
		socket.emit("join", { userId, chatId }, (error: Error) => {
			if (error) {
				return alert(error);
			}
		});
		return () => {
			socket.emit("leave", { userId, chatId });
			socket.disconnect();
			socket.off();
		};
	}, [baseUrl, currentChat, userId]);

	useEffect(() => {
		socket.on("message", (message: IMessage) => {
			setMessages([...(messages as []), message]);
		});
	}, [messages]);

	const handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
		setMessage((event.target as HTMLInputElement).value);
	};

	const handleSendMessage = () => {
		const payload = {
			text: message,
			sender: userId,
			chatId,
		};
		socket.emit("message", payload);
		setToggleButton(!toggleButton);
		setMessage("");
	};

	if (isSuccess && userChats?.length > 0) {
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
					<ChatHeader>
						<ParagraphWrapper fontSize="md" opacity={0.8}>
							<strong>{currentChat?.employer?.companyName}</strong>
						</ParagraphWrapper>
						<ParagraphWrapper fontSize="md" opacity={0.8}>
							<strong>{currentChat?.job?.position}</strong>
						</ParagraphWrapper>
						<ParagraphWrapper fontSize="md" opacity={0.8}>
							<strong>{currentChat?.job?.hourRate}</strong>
						</ParagraphWrapper>
					</ChatHeader>
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
