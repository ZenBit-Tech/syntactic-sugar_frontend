import React, { useEffect, useState } from "react";
import { IMessage } from "redux/chat/chatApi";
import { Socket } from "socket.io-client";

export const useChatHook = (socket: Socket, userId: string, chatId: string) => {

  const [message, setMessage] = useState<string>("");

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
    message
  }
};
