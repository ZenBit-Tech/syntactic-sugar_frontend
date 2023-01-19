import {
	Dashboard,
	FilterBox,
	FreelancerCardsList,
	StyledPage,
	TalentsFilter,
} from "@freelance/components";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useGetEmployerQuery } from "src/redux/createEmployer/employerApi";
import { TALENTS_PAGE } from "src/utils/constants/breakpoint";
import { useSearchTalentsFormHook } from "./searchTalentsFormHook";

export function TalentsPage() {
	const { data: employerProfile } = useGetEmployerQuery();
	const { onSubmit, setToggleFilter, talents, setFilterTalents, filterTalents } =
		useSearchTalentsFormHook();
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const toggleFilterBox = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	return (
		<StyledPage>
			<Dashboard userRole="employer" typePage={TALENTS_PAGE} profile={employerProfile}>
				<FreelancerCardsList data={filterTalents}></FreelancerCardsList>
				<FilterBox isActive={isFilterOpen}>
					<TalentsFilter
						openFilter={toggleFilterBox}
						onSubmit={onSubmit}
						setToggleFilter={setToggleFilter}
						talents={talents}
						disabled={false}
						setFilterTalents={setFilterTalents}
					/>
				</FilterBox>
				<ToastContainer />
			</Dashboard>
		</StyledPage>
	);
}

export default TalentsPage;
