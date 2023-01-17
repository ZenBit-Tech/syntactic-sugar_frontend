import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { IChat } from "redux/chat/chatApi";
import { StyledButton } from "@freelance/components";
import { ROLES } from "utils/constants/roles";
import { useCreateOfferMutation } from "redux/offer/offerApi";
import { useOffer } from "./offerHooks";
import {
	ChatHeaderButtonArea,
	ChatHeaderContainer,
	ChatHeaderInput,
	ChatHeaderJobInfo,
	ChatHeaderOfferArea,
} from "./chat.styled";

export interface ChatHeaderProps {
	chat?: IChat;
	userType?: string;
	refetch: () => void;
}

export function ChatHeader({ chat, userType, refetch }: ChatHeaderProps) {
	const { t } = useTranslation();
	const { hourRate, toggleOfferButton, handleChange, handleCreateOffer, handleOfferButton } =
		useOffer({ refetch, chat });

	const isOffer = useMemo(
		() => chat?.job?.offers?.some(offer => offer?.freelancer?.id === chat?.freelancer?.id),
		[chat?.job?.offers, chat?.freelancer?.id, chat],
	);

	return (
		<ChatHeaderContainer>
			<ChatHeaderJobInfo>
				<strong>{chat?.job?.position}</strong>
				<p>
					<span>{chat?.job?.hourRate} </span>
					<span>{chat?.job?.availableAmountOfHours} </span>
				</p>
			</ChatHeaderJobInfo>
			{isOffer && (
				<ChatHeaderButtonArea>
					<strong>
						{userType === ROLES.FREELANCER ? t("chat.offerRecieved") : t("chat.offerSent")}
					</strong>
				</ChatHeaderButtonArea>
			)}
			{userType !== ROLES.FREELANCER && !isOffer && !toggleOfferButton && (
				<ChatHeaderButtonArea>
					<StyledButton
						buttonColor="redGradient"
						buttonSize="sm"
						fontSize="md"
						onClick={handleOfferButton}
					>
						{t("chat.offer")}
					</StyledButton>
				</ChatHeaderButtonArea>
			)}
			{userType !== ROLES.FREELANCER && !isOffer && toggleOfferButton && (
				<ChatHeaderOfferArea>
					<ChatHeaderInput
						type="number"
						placeholder="Hour rate"
						value={hourRate}
						onChange={handleChange}
					/>
					<StyledButton
						buttonColor="redGradient"
						buttonSize="sm"
						fontSize="md"
						disabled={hourRate.length < 1}
						onClick={handleCreateOffer}
					>
						{t("chat.sendOffer")}
					</StyledButton>
				</ChatHeaderOfferArea>
			)}
		</ChatHeaderContainer>
	);
}

export default ChatHeader;
