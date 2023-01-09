import { Dashboard, Pagination } from "@freelance/components";
import { useGetJobsWithProposalsQuery } from "src/redux/jobs/jobs.api";
import { PROPOSALS_PAGE } from "utils/constants/breakpoint";
import { Wrapper } from "./proposals-filter.styled";

export function ProposalsPage() {
	const { data } = useGetJobsWithProposalsQuery();

	return (
		<Wrapper>
			<Pagination itemsPerPage={5} user="freelancer" data={data} typePage={PROPOSALS_PAGE} />
		</Wrapper>
	);
}
