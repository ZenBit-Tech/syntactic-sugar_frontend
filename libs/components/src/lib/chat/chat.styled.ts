import styled from "styled-components";

interface MessageContainerProps {
	isOwnMessage?: boolean;
}

interface ChatUserCardProps {
  isActive?: boolean;
}

export const ChatContainer = styled.div`
	display: flex;
	height: 600px;
	box-shadow: 1px 1px 3px 3px ${({ theme }) => theme.colors.lightRed};
	border-radius: 25px;
	padding: 1rem;
`;

export const UserChatsList = styled.div`
	display: flex;
	width: 60%;
	flex-direction: column;
	border: 2px solid ${({ theme }) => theme.colors.grey};
	border-radius: 25px 0px 0px 25px;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.colors.white};
	}

	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.lightRed};
		border-radius: 10px;
		border: 3px solid ${({ theme }) => theme.colors.white};
	}
`;

export const ChatArea = styled.div`
	display: flex;
	box-sizing: border-box;
	width: 100%;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	border-radius: 0px 25px 25px 0px;
`;

export const ChatHeader = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.grey};
	border-radius: 0px 25px 0px 0px;
	display: flex;
	height: 10%;
`;

export const ChatMessagesArea = styled.div`
	display: flex;
  padding: 3%;
	flex-direction: column;
	flex-grow: 3;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	height: 80%;
	max-width: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
	::-webkit-scrollbar {
		width: 12px;
	}

	::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.colors.white};
	}

	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.lightRed};
		border-radius: 10px;
		border: 3px solid ${({ theme }) => theme.colors.white};
	}
`;

export const ChatTextArea = styled.div`
	display: flex;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	border-radius: 0px 0px 25px 0px;
	height: 10%;
	width: 100%;
	padding-left: 10%;
	align-items: center;
`;

export const ChatInput = styled.textarea`
	border: 2px solid ${({ theme }) => theme.colors.grey};
	border-radius: 100px;
	height: 40px;
	padding: 0.5rem 1rem;
	width: 100%;

	::placeholder {
		color: ${({ theme }) => theme.colors.grey};
	}

	:hover,
	:focus {
		outline: none;
	}
`;

export const ChatButtonArea = styled.div`
	display: flex;
	width: 30%;
	margin-left: 2%;
	button {
	}
`;

export const ChatMessageContainer = styled.div<MessageContainerProps>`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
  align-items: ${props => (props.isOwnMessage ? "flex-end" : "flex-start")};
	margin-top: 5px;
`;

export const ChatMessageContent = styled.div`
	display: flex;
  max-width: 60%;
`;

export const ChatMessageTextContent = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ChatMessageDate = styled.div`
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: x-small;
	display: inline-flex;
	justify-content: flex-end;
	margin-left: 5px;
`;

export const ChatUserImage = styled.img`
	border: 2px solid ${({ theme }) => theme.colors.grey};
	background: ${({ theme }) => theme.colors.grey};
	object-fit: cover;
	border-radius: 50%;
	height: 45px;
	width: 45px;
	margin: 5px;
`;

export const ChatMessageText = styled.div<MessageContainerProps>`
	padding: 8px;
	font-size: small;
	border-radius: ${props => props.isOwnMessage ? "10px 10px 0px 10px" : "10px 10px 10px 0px"};
	background: ${props =>
		props.isOwnMessage
			? ({ theme }) => theme.colors.darkRed
			: ({ theme }) => theme.colors.lightRed};
	color: white;
`;

export const ChatUserCardContainer = styled.div<ChatUserCardProps>`
	border: 1px solid ${({ theme }) => theme.colors.lightGrey};
	display: flex;
	height: 10%;
	justify-content: space-between;
	background: ${props => (props.isActive ? ({ theme }) => theme.colors.lightGrey : "inherit")};
	:hover {
		cursor: pointer;
		background: ${({ theme }) => theme.colors.lightGrey};
		border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
		box-shadow: 5px 3px 3px ${({ theme }) => theme.colors.lightRed};
	}
`;

export const ChatUserCardImage = styled.img`
	border: 2px solid ${({ theme }) => theme.colors.grey};
	background: ${({ theme }) => theme.colors.grey};
	object-fit: cover;
	border-radius: 50%;
	height: 45px;
	width: 45px;
	margin: 5px;
`;

export const ChatUserCardContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`;

export const ChatUserCardWork = styled.div`
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

export const ChatUserCardLastMessage = styled.div`
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: small;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

export const ChatUserCardInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ChatUserCardDate = styled.div`
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: x-small;
	display: inline-flex;
	justify-content: flex-end;
	margin-left: 5px;
`;
