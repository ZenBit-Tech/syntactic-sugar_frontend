import { useState } from "react";

interface IUseProposalsFilter {
	myProposals: boolean;
	allJobs: boolean;
	isFilterOpen: boolean;
	showMyProposals: () => void;
	showAllJobs: () => void;
	toggleFilterBox: () => void;
}

export const useProposalsFilter = (): IUseProposalsFilter => {
	const [myProposals, setMyProposals] = useState<boolean>(false);
	const [allJobs, setAllJobs] = useState<boolean>(true);
	const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

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
