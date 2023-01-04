import ChatMessage from "./chat-message";
import io, { Socket } from "socket.io-client";
import { ChatUserCard } from "./chat-user-card";
import { ROLES } from "utils/constants/roles";
import { StyledButton } from "@freelance/components";
import {
	ChatArea,
	ChatButtonArea,
	ChatContainer,
	ChatHeader,
	ChatInput,
	ChatMessagesArea,
	ChatTextArea,
	UserChatsList,
} from "./chat.styled";
import { IChat, IMessage, useGetChatsByUserQuery } from "redux/chat/chatApi";
import React, { useEffect, useState } from "react";
import { message } from "antd";

/* eslint-disable-next-line */
export interface ChatProps {
	userType: string;
	userId?: string;
}

let socket: Socket;

export function Chat({ userType, userId }: ChatProps) {
	const { data: userChats } = useGetChatsByUserQuery();
	const [currentChat, setCurrentChat] = useState<IChat>();
	const [messages, setMessages] = useState<IMessage[]>();
  const [message, setMessage] = useState<string>("");
  const [toggleButton, setToggleButton] = useState<boolean>(false)
  const userImage = userType === ROLES.FREELANCER ? currentChat?.employer.image : currentChat?.freelancer.image;

  const ENDPOINT = "http://localhost:8000";
  const chatId = currentChat?.id

  useEffect(() => {
    socket = io(ENDPOINT)
    socket.emit("join", {userId, chatId}, (error: Error) => {
      if (error) {
        return alert(error)
      }
    })
    return () => {
      socket.emit("leave", {userId, chatId})
      socket.disconnect()
      socket.off()
    }
  },[ENDPOINT, currentChat, userId])

  useEffect(() => {
    socket.on('message', (message: IMessage) => {
      setMessages([...messages as [], message])
    })
  },[messages])

  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setMessage((event.target as HTMLInputElement).value)
  }

  const handleSendMessage = () => {
    const payload = {
      text: message,
      sender: userId,
      chatId
    }
    socket.emit("message", payload)
    setToggleButton(!toggleButton)
    setMessage("")
  }

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
						/>
					);
				})}
			</UserChatsList>
			<ChatArea>
				<ChatHeader>{currentChat?.job?.position}</ChatHeader>
				<ChatMessagesArea>
					{messages?.map((message: IMessage) => {
						return <ChatMessage isOwnMessage={message.sender === userId} message={message} userImage={userImage}/>;
					})}
				</ChatMessagesArea>
				<ChatTextArea>
					<ChatInput value={message} onChange={handleChange}/>
					<ChatButtonArea>
						<StyledButton buttonColor="redGradient" buttonSize="sm" fontSize="md" onClick={handleSendMessage}>
							Send
						</StyledButton>
					</ChatButtonArea>
				</ChatTextArea>
			</ChatArea>
		</ChatContainer>
	);
}

export default Chat;
