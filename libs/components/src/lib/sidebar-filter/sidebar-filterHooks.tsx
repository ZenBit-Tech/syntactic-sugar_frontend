import { useState } from "react";

interface IUseSidebarFilter {
	myProposals: boolean;
	allJobs: boolean;
	isFilterOpen: boolean;
	myInvitations: boolean;
	myOffers: boolean;
	showMyProposals: () => void;
	showAllJobs: () => void;
	showMyInvitations: () => void;
	showMyOffers?: () => void;
	toggleFilterBox: () => void;
}

export const useSidebarFilter = (): IUseSidebarFilter => {
	const [myProposals, setMyProposals] = useState<boolean>(false);
	const [allJobs, setAllJobs] = useState<boolean>(true);
	const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
	const [myInvitations, setMyInvitations] = useState<boolean>(false);
	const [myOffers, setMyOffers] = useState<boolean>(false);

	const showMyProposals = () => {
		setMyProposals(true);
		setAllJobs(false);
		setMyInvitations(false);
		setMyOffers(false);
		if (isFilterOpen) {
			toggleFilterBox();
		}
	};

	const showAllJobs = () => {
		setAllJobs(true);
		setMyProposals(false);
		setMyInvitations(false);
		setMyOffers(false);
	};

	const showMyInvitations = () => {
		setMyInvitations(true);
		setAllJobs(false);
		setMyProposals(false);
		setMyOffers(false);
		if (isFilterOpen) {
			toggleFilterBox();
		}
	};

	const showMyOffers = () => {
		setMyOffers(true);
		setMyInvitations(false);
		setAllJobs(false);
		setMyProposals(false);
		if (isFilterOpen) {
			toggleFilterBox();
		}
	};

	const toggleFilterBox = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	return {
		myProposals,
		allJobs,
		isFilterOpen,
		myInvitations,
		myOffers,
		showAllJobs,
		showMyProposals,
		showMyInvitations,
		showMyOffers,
		toggleFilterBox,
	};
};
