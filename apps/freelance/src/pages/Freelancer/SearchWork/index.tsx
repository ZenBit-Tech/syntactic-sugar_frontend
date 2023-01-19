import { useState } from "react";
import {
	Dashboard,
	Pagination,
	SearchWorkFilter,
	FilterBox,
	StyledPage,
	useProposalsFilter,
	useInvitationFilterHooks,
} from "@freelance/components";
import { JOBS_PAGE } from "src/utils/constants/breakpoint";
import { ROLES } from "src/utils/constants/roles";
import { useGetFreelancerQuery } from "src/redux/createFreelancer/freelancer-pageApi";
import { ToastContainer } from "react-toastify";
import { InputWrapper } from "./style";
import { useSearchWorkFormHook } from "./searchWorkFormHook";

export function SearchWork() {
	const { data: freelancerProfile } = useGetFreelancerQuery();
	const {
		onSubmit,
		setFilter,
		setToggleFilter,
		publishedFilterJobs,
		setFilterJobs,
		data,
		freelancerFilter,
		refetch,
	} = useSearchWorkFormHook();
	const { myProposals, allJobs, isFilterOpen, showMyProposals, showAllJobs, toggleFilterBox } =
		useProposalsFilter();

	const proposals =
		publishedFilterJobs &&
		publishedFilterJobs.filter(
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
							data={publishedFilterJobs}
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
						typePage={JOBS_PAGE}
						openFilter={toggleFilterBox}
						onSubmit={onSubmit}
						setFilter={setFilter}
						freelancerFilter={freelancerFilter}
						setToggleFilter={setToggleFilter}
						filterJobs={publishedFilterJobs}
						setFilterJobs={setFilterJobs}
						data={data}
						disabled={!allJobs}
					/>
				</FilterBox>
				<ToastContainer />
			</Dashboard>
		</StyledPage>
	);
}

export default SearchWork;
