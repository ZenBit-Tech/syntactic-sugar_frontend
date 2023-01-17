import {
	Dashboard,
	FilterBox,
	FreelancerCardsList,
	SearchWorkFilter,
	StyledPage,
} from "@freelance/components";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useGetEmployerQuery } from "src/redux/createEmployer/employerApi";
import { useGetAllFreelancersQuery } from "src/redux/createFreelancer/freelancer-pageApi";
import { TALENTS_PAGE } from "src/utils/constants/breakpoint";
import { useSearchTalentsFormHook } from "./searchTalentsFormHook";

export function TalentsPage() {
	const { data: talents } = useGetAllFreelancersQuery();
	const { data: employerProfile } = useGetEmployerQuery();
	const {
		onSubmit,
		setFilter,
		setToggleFilter,
		publishedFilterJobs,
		setFilterJobs,
		freelancerFilter,
		refetch,
		data,
	} = useSearchTalentsFormHook();
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const toggleFilterBox = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	return (
		<StyledPage>
			<Dashboard userRole="employer" typePage={TALENTS_PAGE} profile={employerProfile}>
				<FreelancerCardsList data={talents}></FreelancerCardsList>
				<FilterBox isActive={isFilterOpen}>
					<SearchWorkFilter
						openFilter={toggleFilterBox}
						onSubmit={onSubmit}
						setFilter={setFilter}
						freelancerFilter={freelancerFilter}
						setToggleFilter={setToggleFilter}
						filterJobs={publishedFilterJobs}
						setFilterJobs={setFilterJobs}
						data={data}
						disabled={false}
					/>
				</FilterBox>
				<ToastContainer />
			</Dashboard>
		</StyledPage>
	);
}

export default TalentsPage;
