import { useState } from "react";

interface IUseProposalsFilter {
	myProposals: boolean;
	allJobs: boolean;
	isFilterOpen: boolean;
	myInvitations: boolean;
	showMyProposals: () => void;
	showAllJobs: () => void;
	showMyInvitations: () => void;
	toggleFilterBox: () => void;
}

export const useProposalsFilter = (): IUseProposalsFilter => {
	const [myProposals, setMyProposals] = useState<boolean>(false);
	const [allJobs, setAllJobs] = useState<boolean>(true);
	const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
	const [myInvitations, setMyInvitations] = useState<boolean>(false);

	const showMyProposals = () => {
		setMyProposals(true);
		setAllJobs(false);
		setMyInvitations(false);
		if (isFilterOpen) {
			toggleFilterBox();
		}
	};

	const showAllJobs = () => {
		setAllJobs(true);
		setMyProposals(false);
		setMyInvitations(false);
	};

	const showMyInvitations = () => {
		setMyInvitations(true);
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
		showAllJobs,
		showMyProposals,
		showMyInvitations,
		toggleFilterBox,
	};
};
