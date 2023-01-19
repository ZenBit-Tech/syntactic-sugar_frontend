import {
	Dashboard,
	FilterBox,
	FreelancerCardsList,
	StyledPage,
	TalentsFilter,
	useInvitationFilterHooks,
} from "@freelance/components";
import { ToastContainer } from "react-toastify";
import { useGetEmployerQuery } from "src/redux/createEmployer/employerApi";
import { TALENTS_PAGE } from "src/utils/constants/breakpoint";
import { useSearchTalentsFormHook } from "./searchTalentsFormHook";

export function TalentsPage() {
	const { data: employerProfile } = useGetEmployerQuery();
	const { onSubmit, setToggleFilter, talents, setFilterTalents, filterTalents, invitationFilter } =
		useSearchTalentsFormHook();

	const {
		invitations,
		allTalents,
		isFilterOpen,
		showInvitations,
		showAllTallents,
		toggleFilterBox,
	} = useInvitationFilterHooks();

	return (
		<StyledPage>
			<Dashboard
				userRole="employer"
				typePage={TALENTS_PAGE}
				profile={employerProfile}
				invitations={invitations}
				allTalents={allTalents}
				showInvitations={showInvitations}
				showAllTallents={showAllTallents}
			>
				{allTalents && <FreelancerCardsList data={filterTalents}></FreelancerCardsList>}
				{invitations && <FreelancerCardsList data={invitationFilter}></FreelancerCardsList>}
				<FilterBox isActive={isFilterOpen}>
					<TalentsFilter
						openFilter={toggleFilterBox}
						onSubmit={onSubmit}
						setToggleFilter={setToggleFilter}
						talents={talents}
						disabled={invitations}
						setFilterTalents={setFilterTalents}
					/>
				</FilterBox>
				<ToastContainer />
			</Dashboard>
		</StyledPage>
	);
}

export default TalentsPage;
