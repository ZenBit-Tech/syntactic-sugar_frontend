import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Proposal, useToggleIsPublishJobMutation } from "redux/jobs";
import { IProposal } from "redux/interfaces/IProposal";
import { IInvitation, IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { IChat } from "redux/chat/chatApi";
import { IResponseEmployer } from "redux/createEmployer/employerApi";
import { IOffer } from "redux/offer/offerApi";

interface IUseJobCardParams {
	isPublished?: boolean;
	invitation?: IInvitation[];
	jobChats?: IChat[];
	profile?: IResponse | IResponseEmployer;
	proposals?: Proposal[];
	offer?: IOffer[];
}

interface IUseJobCard {
	handleToggleIsPublishedButton: (id?: string) => Promise<void>;
	handleEditJob: (proposal?: Proposal[]) => void;
	closeModalEditJob: () => void;
	openSendProposal: () => void;
	closeSendProposal: () => void;
	openCreateProposal: () => void;
	closeCreateProposal: () => void;
	openProposalsList: () => void;
	closeProposalsList: () => void;
	isTogglingJob: boolean;
	isModalEditJob: boolean;
	proposalModalOpen: boolean;
	detailsModalOpen: boolean;
	isProposalsListOpen: boolean;
	proposalExist: (arr1: IProposal[], arr2: IProposal[]) => boolean;
	invitation?: IInvitation[];
	proposals?: Proposal[] | IProposal[];
	profile?: IResponse | IResponseEmployer;
	isChat?: boolean;
	isInvitation?: boolean;
	isProposal?: boolean;
	isOffer?: boolean;
	offerTax?: string[];
}

export const useJobCard = ({
	isPublished,
	invitation,
	jobChats,
	profile,
	proposals,
	offer,
}: IUseJobCardParams): IUseJobCard => {
	const { t } = useTranslation();
	const [proposalModalOpen, setProposalModalOpen] = useState<boolean>(false);
	const [detailsModalOpen, setDetailsModalOpen] = useState<boolean>(false);
	const [isProposalsListOpen, setProposalsListOpen] = useState<boolean>(false);
	const [toggleIsPublishJob, { isLoading: isTogglingJob, isSuccess, isError }] =
		useToggleIsPublishJobMutation();
	const [isModalEditJob, setIsModalEditJob] = useState<boolean>(false);

	const notification = !isPublished
		? t("jobCard.publishedNotification")
		: t("jobCard.closedNotification");

	const handleToggleIsPublishedButton = async (id?: string): Promise<void> => {
		try {
			id && (await toggleIsPublishJob(id));
		} catch {
			toast.error(t("serverErrorMessage"));
		}
	};

	const handleEditJob = (proposals?: Proposal[]): void => {
		if (proposals && proposals?.length > 0) {
			toast.error(t("jobCard.canNotEdit"));

			return;
		}

		setIsModalEditJob(true);
	};

	const closeModalEditJob = () => {
		setIsModalEditJob(false);
	};

	const openSendProposal = (): void => {
		setProposalModalOpen(true);
	};

	const closeSendProposal = (): void => {
		setProposalModalOpen(false);
	};

	const openCreateProposal = (): void => {
		setDetailsModalOpen(true);
	};

	const closeCreateProposal = (): void => {
		setDetailsModalOpen(false);
	};

	const openProposalsList = (): void => {
		setProposalsListOpen(true);
	};

	const closeProposalsList = (): void => {
		setProposalsListOpen(false);
	};

	useEffect(() => {
		if (isSuccess) toast.success(notification);
		if (isError) toast.error(t("serverErrorMessage"));
	}, [isSuccess, isError, notification, t]);

	const proposalExist = (arr1: IProposal[], arr2: IProposal[]) => {
		if (arr1) {
			return arr1
				.map(proposal => {
					return arr2.find(item => item.id === proposal.id);
				})
				.some(item => item !== undefined);
		}

		return false;
	};

	const isChat = useMemo(
		() => jobChats?.some(chat => chat.freelancer.id === profile?.id),
		[jobChats, profile?.id],
	);
	const isInvitation = useMemo(
		() => invitation?.some(inv => inv.freelancer.id === profile?.id),
		[invitation, profile?.id],
	);
	const isProposal = useMemo(
		() => proposalExist(profile?.proposals as IProposal[], proposals as IProposal[]),
		[profile?.proposals, proposals],
	);
	const isOffer = useMemo(
		() => offer?.some(o => o.freelancer.id === profile?.id),
		[offer, profile?.id],
	);

	const offerTax = offer?.map(item => item.hourRate);

	return {
		handleToggleIsPublishedButton,
		handleEditJob,
		closeModalEditJob,
		isTogglingJob,
		isModalEditJob,
		openSendProposal,
		closeSendProposal,
		openCreateProposal,
		closeCreateProposal,
		proposalModalOpen,
		detailsModalOpen,
		openProposalsList,
		closeProposalsList,
		isProposalsListOpen,
		proposalExist,
		isChat,
		isInvitation,
		isProposal,
		isOffer,
		offerTax,
	};
};
