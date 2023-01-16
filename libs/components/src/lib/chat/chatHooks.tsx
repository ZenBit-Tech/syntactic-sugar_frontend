import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { IChat, IMessage, useGetChatsByUserQuery } from "redux/chat/chatApi";
import { ROLES } from "utils/constants/roles";
import { baseUrl } from "src/utils/constants/redux-query";

interface ChatHookProps {
	userId?: string;
	userType?: string;
}

let socket: Socket;

export const useChatHook = ({ userId, userType }: ChatHookProps) => {
	const [message, setMessage] = useState<string>("");
	const { data: userChats, isSuccess, isLoading, refetch } = useGetChatsByUserQuery();
	const [currentChat, setCurrentChat] = useState<IChat>();
	const [messages, setMessages] = useState<IMessage[]>([]);
	const [toggleButton, setToggleButton] = useState<boolean>(false);
	const userImage =
		userType === ROLES.FREELANCER ? currentChat?.employer.image : currentChat?.freelancer.image;
	const chatId = currentChat?.id;

	useEffect(() => {
		if (isSuccess) {
			setCurrentChat(userChats[0]);
			setMessages(userChats[0]?.messages || []);
		}
	}, [isSuccess, userChats]);

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
		setMessage("");
	};

	return {
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
		chatId,
		refetch,
	};
};
