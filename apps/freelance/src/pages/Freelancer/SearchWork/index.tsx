import {
	Dashboard,
	Pagination,
	SearchWorkFilter,
	FilterBox,
	StyledPage,
	useSidebarFilter,
} from "@freelance/components";
import { JOBS_PAGE } from "src/utils/constants/breakpoint";
import { ROLES } from "src/utils/constants/roles";
import { ToastContainer } from "react-toastify";
import { InputWrapper } from "./style";
import { useSearchWorkFormHook } from "./searchWorkFormHook";

export function SearchWork() {
	const {
		onSubmit,
		setFilter,
		setToggleFilter,
		publishedFilterJobs,
		setFilterJobs,
		data,
		freelancerFilter,
		refetch,
    refetchJobs,
		proposals,
		freelancerData,
		invitations,
		offers,
	} = useSearchWorkFormHook();
	const {
		myProposals,
		allJobs,
		isFilterOpen,
		myInvitations,
		myOffers,
		showMyProposals,
		showAllJobs,
		showMyInvitations,
		showMyOffers,
		toggleFilterBox,
	} = useSidebarFilter();

	return (
		<StyledPage>
			<Dashboard
				userRole="freelancer"
				typePage={JOBS_PAGE}
				profile={freelancerData}
				myProposals={myProposals}
				allJobs={allJobs}
				myInvitations={myInvitations}
				myOffers={myOffers}
				showMyProposals={showMyProposals}
				showAllJobs={showAllJobs}
				showMyInvitations={showMyInvitations}
				showMyOffers={showMyOffers}
			>
				<InputWrapper>
					{allJobs && (
						<Pagination
							itemsPerPage={5}
							user={ROLES.FREELANCER}
							data={publishedFilterJobs}
							typePage={JOBS_PAGE}
							profile={freelancerData}
							refetch={refetch}
              refetchJobs={refetchJobs}
						/>
					)}
					{myProposals && (
						<Pagination
							itemsPerPage={5}
							user={ROLES.FREELANCER}
							data={proposals}
							typePage={JOBS_PAGE}
							profile={freelancerData}
						/>
					)}
					{myInvitations && (
						<Pagination
							itemsPerPage={5}
							user={ROLES.FREELANCER}
							data={invitations}
							typePage={JOBS_PAGE}
							profile={freelancerData}
						/>
					)}
					{myOffers && (
						<Pagination
							itemsPerPage={5}
							user={ROLES.FREELANCER}
							data={offers}
							typePage={JOBS_PAGE}
							profile={freelancerData}
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
