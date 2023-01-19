import { useState } from "react";

interface IuseProposalsFilter {
	myProposals: boolean;
	allJobs: boolean;
	isFilterOpen: boolean;
	showMyProposals: () => void;
	showAllJobs: () => void;
	toggleFilterBox: () => void;
}

export const useProposalsFilter = (): IuseProposalsFilter => {
	const [myProposals, setMyProposals] = useState(false);
	const [allJobs, setAllJobs] = useState(true);
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const showMyProposals = () => {
		setMyProposals(true);
		setAllJobs(false);
		if (isFilterOpen) {
			toggleFilterBox();
		}
	};

	const showAllJobs = () => {
		setAllJobs(true);
		setMyProposals(false);
	};

	const toggleFilterBox = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	return { myProposals, allJobs, isFilterOpen, showAllJobs, showMyProposals, toggleFilterBox };
};
