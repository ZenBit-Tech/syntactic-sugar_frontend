import {
	useGetFreelancerByIdQuery,
	useSendInvitationMutation,
} from "redux/createFreelancer/freelancer-pageApi";
import { useGetJobsByEmployerQuery } from "redux/jobs";

export interface IUseInvitationCardHook {
	sendInvitation: () => void;
	freelancerProposal: { value: string; label: string };
	options: { value: string; label: string };
	isLoading: boolean;
	isSuccess: boolean;
}

export interface IUseInvitationCardHookProps {
	freelancer_id: string;
}

export const useInvitationCardHook = ({ freelancer_id }: IUseInvitationCardHookProps) => {
	const { data } = useGetJobsByEmployerQuery();
	const { data: oneFreelancer } = useGetFreelancerByIdQuery(freelancer_id);
	const [sendInvitation, { isLoading, isSuccess }] = useSendInvitationMutation();

	const employerJobsArr = data?.map(job => {
		return { value: job.id, label: job.title };
	});

	const employerJobsIdArr = employerJobsArr?.map(item => item.value);

	const freelancerInvitationsIdArr =
		oneFreelancer &&
		oneFreelancer.invitation
			.map(inv => inv.job)
			.map(i => i.id)
			.filter(item => item);

	const diff = function (arr1: string[], arr2: string[]) {
		return arr1
			?.filter((i: string) => !arr2.includes(i))
			.concat(arr2.filter((i: string) => !arr1.includes(i)));
	};

	const freeJobs =
		employerJobsIdArr && freelancerInvitationsIdArr
			? diff(employerJobsIdArr, freelancerInvitationsIdArr)
			: [];

	const options = employerJobsArr?.filter(
		item => freeJobs?.filter((inv: string) => inv === item.value).length > 0,
	);

	const freelancerProposal =
		options &&
		options.filter(
			option =>
				oneFreelancer &&
				oneFreelancer.proposals.filter(proposal => proposal?.job?.id === option.value).length > 0,
		);

	return {
		sendInvitation,
		freelancerProposal,
		isLoading,
		isSuccess,
		options,
	};
};
