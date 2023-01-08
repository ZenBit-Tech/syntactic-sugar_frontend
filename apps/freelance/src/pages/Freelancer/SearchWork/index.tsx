import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SelectOptions } from "utils/select-options/options";
import { Dashboard, StyledTitle, Pagination, SearchWorkFilter, FilterBox } from "@freelance/components";
import { JOBS_PAGE } from "src/utils/constants/breakpoint";
import { useSearchWorkFormHook } from "./searchWorkFormHook";
import {
	StyledPage,
	InputHeader,
	InputWrapper,
} from "./style";

type user = "freelancer" | "employer";

export interface IFormInput {
	category: SelectOptions;
	position: string;
	skills: SelectOptions[];
	employmentType: SelectOptions;
	englishLevel: SelectOptions;
	hourRate: SelectOptions;
	availableAmountOfHour: SelectOptions;
	typePage?: "proposals" | "job";
}

export function SearchWork() {
	const user: user = "freelancer";
	const { t } = useTranslation();
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
				<InputHeader>
					<StyledTitle tag="h2" fontSize="md" fontWeight={700}>
						{t("freelancer.searchWork.jobsList")}
					</StyledTitle>
				</InputHeader>
				<InputWrapper>
					<Pagination itemsPerPage={5} user={user} data={filterJobs} typePage={JOBS_PAGE} />
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