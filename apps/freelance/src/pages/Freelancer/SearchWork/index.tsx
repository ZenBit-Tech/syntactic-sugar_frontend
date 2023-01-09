import { useState } from "react";
import { Dashboard, Pagination, SearchWorkFilter, FilterBox, StyledPage } from "@freelance/components";
import { JOBS_PAGE } from "src/utils/constants/breakpoint";
import { ROLES } from "src/utils/constants/roles";
import { useSearchWorkFormHook } from "./searchWorkFormHook";
import { InputWrapper } from "./style";

export function SearchWork() {
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

	return (
		<StyledPage>
			<Dashboard userRole="freelancer" typePage={JOBS_PAGE}>
				<InputWrapper>
					<Pagination itemsPerPage={5} user={ROLES.FREELANCER} data={filterJobs} typePage={JOBS_PAGE} />
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
					/>
				</FilterBox>
			</Dashboard>
		</StyledPage>
	);
}

export default SearchWork;