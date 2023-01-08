import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { useOptions, SelectOptions } from "utils/select-options/options";
import { Dashboard, StyledTitle, StyledButton, Pagination, SearchWorkFilter, FilterBox } from "@freelance/components";
import { JobsInterface, useGetJobsQuery } from "redux/jobs/jobs.api";
import { useGetFreelancerQuery } from "redux/createFreelancer/freelancer-pageApi";
import { useSearchWorkFormHook } from "./searchWorkFormHook";
import { JOBS_PAGE } from "src/utils/constants/breakpoint";
import {
	StyledPage,
	// Form,
	// InputContainer,
	// Wrapper,
	InputHeader,
	InputWrapper,
	// SelectElement,
	// InputContainerCards,
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

// interface JobSkills {
// 	id: string;
// 	name: string;
// }

export function SearchWork() {
	const user: user = "freelancer";
	const { t } = useTranslation();
	// const { handleSubmit, control, getValues, reset } = useForm<IFormInput>();
	// const { isLoading, isError, data, isSuccess } = useGetJobsQuery();
	// const { data: freelancerData } = useGetFreelancerQuery();

	// const emptyValue = {
	// 	value: "",
	// 	label: "",
	// };
	// const {
	// 	countries,
	// 	categories,
	// 	skills,
	// 	employmentType,
	// 	hourRate,
	// 	hoursAmount,
	// 	workExperience,
	// 	englishLevel,
	// } = useOptions();

	// const freelancerFilter = {
	// 	position: freelancerData?.position,
	// 	category: freelancerData?.category.name,
	// 	skills: freelancerData?.skills.map(skill => skill.name),
	// 	employmentType: freelancerData?.employmentType,
	// 	englishLevel: freelancerData?.englishLevel,
	// 	hourRate: freelancerData?.hourRate,
	// 	availableAmountOfHour: freelancerData?.availableAmountOfHours,
	// };

	// const filtersObj = {
	// 	category: categories,
	// 	skills: skills,
	// 	employmentType: employmentType,
	// 	englishLevel: englishLevel,
	// 	hourRate: hourRate,
	// 	availableAmountOfHour: hoursAmount,
	// };

	// const [filterJobs, setFilterJobs] = useState(data);
	// const [useFilters, setUseFilters] = useState<boolean>(false);
	const { filterJobs } = useSearchWorkFormHook();
	console.log(filterJobs);
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const toggleFilterBox = () => {
		setIsFilterOpen(!isFilterOpen);
	}
	
	const closeFilter = () => {
		setIsFilterOpen(false);
	}

	// const filterSkillsCheck = (arr1: string[], arr2: string[]) => {
	// 	const skillsIncluded = arr2.every(skill => arr1.includes(skill));

	// 	return skillsIncluded;
	// };

	// const skillIncludesFunc = (arr1: string[][], arr2: string[]) => {
	// 	const skillsIncludesArr: boolean[] = [];

	// 	arr1.map(job => {
	// 		skillsIncludesArr.push(filterSkillsCheck(job, arr2));
	// 	});

	// 	return skillsIncludesArr;
	// };

	// useEffect(() => {
	// 	setFilterJobs(data);
	// }, [isSuccess]);

	// useEffect(() => {
	// 	if (toggleFilter === "filter") {
	// 		const jobSkills: JobSkills[][] | undefined = data?.map((job: JobsInterface) => job.skills);
	// 		const filterJobsSkills: string[][] | undefined = jobSkills?.map((skill: JobSkills[]) => {
	// 			return skill.map((item: JobSkills) => item.name);
	// 		});
	// 		const filterSkills = filter.skills;
	// 		const skillsFilter = skillIncludesFunc(filterJobsSkills as string[][], filterSkills);
	// 		const newFilterJobs = data?.filter(
	// 			(job: JobsInterface, index) =>
	// 				job.position.toLowerCase().includes(filter.position.toLowerCase()) &&
	// 				job.category.name.includes(filter.category) &&
	// 				job.employmentType.includes(filter.employmentType) &&
	// 				job.englishLevel.includes(filter.englishLevel) &&
	// 				job.hourRate.includes(filter.hourRate) &&
	// 				job.availableAmountOfHours.includes(filter.availableAmountOfHour) &&
	// 				skillsFilter[index],
	// 		);

	// 		setFilterJobs(newFilterJobs);
	// 	}
	// }, [toggleFilter, filter]);

	return (
		<StyledPage>
			<Dashboard userRole="freelancer" typePage={JOBS_PAGE}>
				{/* <Form onSubmit={handleSubmit(onSubmit)}> */}
					<InputHeader>
						<StyledTitle tag="h2" fontSize="md" fontWeight={700}>
							{t("freelancer.searchWork.jobsList")}
						</StyledTitle>
						{/* <StyledButton
							type="reset"
							buttonColor="redGradient"
							buttonSize="sm"
							fontSize="md"
							onClick={() => {
								setToggleFilter("reset");
								setFilterJobs(data);
								setUseFilters(false);
								reset();
							}}
						>
							{t("freelancer.searchWork.buttonAll")}
						</StyledButton>
						<StyledButton
							type="reset"
							buttonColor="redGradient"
							buttonSize="sm"
							fontSize="md"
							onClick={() => {
								setToggleFilter("filter");
								setFilter(freelancerFilter);
								setUseFilters(false);
								reset();
							}}
						>
							{t("freelancer.searchWork.buttonProfile")}
						</StyledButton> */}
						{/* <StyledButton
							type="button"
							disabled={useFilters}
							buttonColor="redGradient"
							buttonSize="sm"
							fontSize="md"
							onClick={() => {
								setToggleFilter("reset");
								setFilterJobs(data);
								setUseFilters(true);
							}}
						>
							{t("freelancer.searchWork.buttonFilter")}
						</StyledButton> */}
					</InputHeader>
					{/* <Wrapper> */}
						{/* <InputContainerCards> */}
							<InputWrapper>
								<Pagination itemsPerPage={5} user={user} data={filterJobs} typePage={JOBS_PAGE} />
						</InputWrapper>
						<FilterBox isActive={isFilterOpen}>
							<SearchWorkFilter
								openFilter={toggleFilterBox}
								closeFilter={closeFilter}
							/>
						</FilterBox>
						
						{/* </InputContainerCards> */}
						{/* <InputContainer>
							<InputHeader>
								<StyledTitle tag="h2" fontSize="md" fontWeight={700}>
									{t("freelancer.searchWork.filter")}
								</StyledTitle>
							</InputHeader> */}
							{/* <InputWrapper>
								<Controller
									name="position"
									control={control}
									render={({ field }) => (
										<input
											disabled={!useFilters}
											{...field}
											defaultValue=""
											placeholder={t("freelancer.createProfile.positionPlaceholder")}
										/>
									)}
								/>
								<div className="selectContainer">
									<div className="selectContainer__left">
										{Object.keys(filtersObj).map((key: string, index: number) => {
											return (
												<div className="selectContainer__select_map">
													<Controller
														name={key as keyof typeof filtersObj}
														control={control}
														defaultValue={key === "skills" ? [] : emptyValue}
														render={({ field }) => (
															<>
																<label htmlFor={key}>
																	{t(`freelancer.createProfile.selectOption.${key}`)}
																</label>
																<SelectElement
																	id={key}
																	isDisabled={!useFilters}
																	options={filtersObj[key as keyof typeof filtersObj]}
																	{...field}
																	placeholder=""
																	isSearchable
																	isMulti={key === "skills"}
																	classNamePrefix="react-select"
																/>
															</>
														)}
													/>
												</div>
											);
										})}
									</div>
								</div>
								<div className="selectContainer__buttons">
									<StyledButton
										type="submit"
										disabled={!useFilters}
										buttonColor="redGradient"
										buttonSize="sm"
										fontSize="md"
									>
										{t("freelancer.searchWork.filter")}
									</StyledButton>
									<StyledButton
										type="reset"
										disabled={!useFilters}
										onClick={() => {
											setFilterJobs(data);
											setToggleFilter("reset");
											reset();
										}}
										buttonColor="redGradient"
										buttonSize="sm"
										fontSize="md"
									>
										{t("freelancer.searchWork.unFilter")}
									</StyledButton>
								</div>
							</InputWrapper> */}
						{/* </InputContainer> */}
						{/* <SearchWorkFilter /> */}
					{/* </Wrapper> */}
				{/* </Form> */}
			</Dashboard>
		</StyledPage>
	);
}

export default SearchWork;
