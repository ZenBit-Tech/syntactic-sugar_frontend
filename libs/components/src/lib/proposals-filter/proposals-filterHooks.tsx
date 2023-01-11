import { useState } from "react";
import { JobsInterface, useGetJobsWithProposalsQuery } from "redux/jobs";

interface IuseProposalsFilter {
	myProposals: boolean;
	showMyProposals: () => void;
	allJobs: boolean;
	showAllJobs: () => void;
}

export const useProposalsFilter = (): IuseProposalsFilter => {
	const [myProposals, setMyProposals] = useState(false);
	const [allJobs, setAllJobs] = useState(true);

	const showMyProposals = () => {
		setMyProposals(true);
		setAllJobs(false);
	};

	const showAllJobs = () => {
		setAllJobs(true);
		setMyProposals(false);
	};

	return { myProposals, showMyProposals, allJobs, showAllJobs };
};
