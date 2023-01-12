import { useState } from "react";
import {
	Dashboard,
	Pagination,
	SearchWorkFilter,
	FilterBox,
	StyledPage,
	useProposalsFilter,
} from "@freelance/components";
import { JOBS_PAGE } from "src/utils/constants/breakpoint";
import { ROLES } from "src/utils/constants/roles";
import { useGetFreelancerQuery } from "src/redux/createFreelancer/freelancer-pageApi";
import { InputWrapper } from "./style";
import { useSearchWorkFormHook } from "./searchWorkFormHook";

export function SearchWork() {
	const { data: freelancerProfile } = useGetFreelancerQuery();
	const {
		onSubmit,
		setFilter,
		setToggleFilter,
		filterJobs,
		setFilterJobs,
		data,
		freelancerFilter,
		refetch,
	} = useSearchWorkFormHook();
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const { myProposals, showMyProposals, allJobs, showAllJobs } = useProposalsFilter();
	console.log(filterJobs);
	const toggleFilterBox = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	const proposals =
		filterJobs &&
		filterJobs.filter(
			job =>
				job.proposals.filter(
					proposal =>
						freelancerProfile &&
						freelancerProfile.proposals.filter(item => item.id === proposal.id).length > 0,
				).length > 0,
		);

	return (
		<StyledPage>
			<Dashboard
				userRole="freelancer"
				typePage={JOBS_PAGE}
				profile={freelancerProfile}
				myProposals={myProposals}
				allJobs={allJobs}
				showMyProposals={showMyProposals}
				showAllJobs={showAllJobs}
			>
				<InputWrapper>
					{allJobs && (
						<Pagination
							itemsPerPage={5}
							user={ROLES.FREELANCER}
							data={filterJobs}
							typePage={JOBS_PAGE}
							profile={freelancerProfile}
							refetch={refetch}
						/>
					)}
					{myProposals && (
						<Pagination
							itemsPerPage={5}
							user={ROLES.FREELANCER}
							data={proposals}
							typePage={JOBS_PAGE}
							profile={freelancerProfile}
						/>
					)}
				</InputWrapper>
				<FilterBox isActive={isFilterOpen}>
					<SearchWorkFilter
						openFilter={toggleFilterBox}
						onSubmit={onSubmit}
						setFilter={setFilter}
						freelancerFilter={freelancerFilter}
						setToggleFilter={setToggleFilter}
						filterJobs={filterJobs}
						setFilterJobs={setFilterJobs}
						data={data}
						disabled={!allJobs}
					/>
				</FilterBox>
			</Dashboard>
		</StyledPage>
	);
}

export default SearchWork;
