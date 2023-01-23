import React, { useEffect, useState, useMemo, Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useCreateOfferMutation } from "redux/offer/offerApi";
import { IChat } from "redux/chat/chatApi";

interface OfferHooksProps {
	chat?: IChat;
	refetch: () => void;
}

interface IUseOffer {
	hourRate: string;
	toggleOfferButton: boolean;
	setToggleOfferButton: Dispatch<SetStateAction<boolean>>;
	handleOfferButton: () => void;
	handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
	handleCreateOffer: (event: React.FormEvent<HTMLButtonElement>) => Promise<void>;
}

export const useOffer = ({ refetch, chat }: OfferHooksProps): IUseOffer => {
	const { t } = useTranslation();
	const [toggleOfferButton, setToggleOfferButton] = useState<boolean>(false);
	const [hourRate, setHourRate] = useState<string>("");
	const [createOffer, { isSuccess: createSuccess }] = useCreateOfferMutation();

	useEffect(() => {
		setToggleOfferButton(false);
	}, [chat]);

	const handleOfferButton = () => {
		setToggleOfferButton(!toggleOfferButton);
	};

	const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
		setHourRate((event.target as HTMLInputElement).value);
	};

	const handleCreateOffer = async (event: React.FormEvent<HTMLButtonElement>) => {
		try {
			event.preventDefault();
			const payload = {
				hourRate: hourRate,
				freelancerId: chat?.freelancer?.id,
				jobId: chat?.job?.id,
			};
			await createOffer(payload);
			await refetch();
			setToggleOfferButton(!toggleOfferButton);
			setHourRate("");
		} catch (error) {
			toast.error(t("serverErrorMessage"));
		}
	};

	return {
		hourRate,
		toggleOfferButton,
		setToggleOfferButton,
		handleOfferButton,
		handleCreateOffer,
		handleChange,
	};
};
