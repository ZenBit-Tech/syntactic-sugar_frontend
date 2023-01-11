import { useState } from "react";
import { Dashboard, Pagination, SearchWorkFilter, FilterBox, StyledPage, useProposalsFilter } from "@freelance/components";
import { JOBS_PAGE } from "src/utils/constants/breakpoint";
import { ROLES } from "src/utils/constants/roles";
import { useSearchWorkFormHook } from "./searchWorkFormHook";
import { InputWrapper } from "./style";
import { useGetFreelancerQuery } from "src/redux/createFreelancer/freelancer-pageApi";

export function SearchWork() {
	const { data: freelancerProfile } = useGetFreelancerQuery();
	const {
		onSubmit,
		setFilter,
		setToggleFilter,
		filterJobs,
		setFilterJobs,
		data,
		freelancerFilter
	} = useSearchWorkFormHook();
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const toggleFilterBox = () => {
		setIsFilterOpen(!isFilterOpen);
	}

	const { proposals, myProposals, showMyProposals, allJobs, showAllJobs } = useProposalsFilter();

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
					{allJobs &&
						<Pagination
							itemsPerPage={5}
							user={ROLES.FREELANCER}
							data={filterJobs}
							typePage={JOBS_PAGE}
							profile={freelancerProfile} />}
					{myProposals &&
						<Pagination
							itemsPerPage={5}
							user={ROLES.FREELANCER}
							data={proposals}
							typePage={JOBS_PAGE}
							profile={freelancerProfile} />}
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