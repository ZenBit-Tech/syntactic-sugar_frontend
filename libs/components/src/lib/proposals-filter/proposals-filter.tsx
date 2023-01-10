import { useState } from "react";
import { JobsInterface, useGetJobsWithProposalsQuery } from "redux/jobs";

interface IuseProposalsFilter {
	proposals?: JobsInterface[];
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
	}

	const showAllJobs = () => {
		setAllJobs(true);
		setMyProposals(false);
	}

	const { data: proposals } = useGetJobsWithProposalsQuery();

	return { proposals, myProposals, showMyProposals, allJobs, showAllJobs };
}
