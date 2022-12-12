import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm, SubmitHandler, Controller, ChangeHandler } from "react-hook-form";
import {
	StyledPage,
	Form,
	InputContainer,
	Wrapper,
	ButtonsContainer,
	InputHeader,
	InputWrapper,
	SelectElement,
} from "./style";
import {
	countries,
	categories,
	skills,
	employmentType,
	hourRate,
	hoursAmount,
	workExperience,
	englishLevel,
	SelectOptions,
} from "utils/select-options/options";
 // hardcoded  - get jobs from server not provided yet
import { jobs } from "utils/jobs/jobs";
import { Dashboard, StyledTitle, StyledButton, JobCard, Pagination } from "@freelance/components";
import { it } from "node:test";
import { useGetJobsQuery } from "redux/jobs/jobs.api";

type user = "freelancer" | "employer";

interface IFormInput {
	category: SelectOptions;
	position: string;
	skills: SelectOptions[];
	employmentType: SelectOptions;
	englishLevel: SelectOptions;
	hourRate: SelectOptions;
	availableAmountOfHour: SelectOptions;
}

export function SearchWork() {
	const user: user = "freelancer";
	const { t } = useTranslation();
	const { handleSubmit, control, getValues, reset } = useForm<IFormInput>();
	const { isLoading, isError, data } = useGetJobsQuery();
	const emptyValue = {
		value: "",
		label: "",
	};

  // hardcoded  - get freelanceer profile not provided yet
	const freelancerFilter = {
		position: "",
		category: "Category",
		skills: ["JavaScript/Front-End"],
		employmentType: "",
		englishLevel: "",
		hourRate: "",
		availableAmountOfHour: "",
	};

	const [filterJobs, setFilterJobs] = useState(jobs);
	const [filter, setFilter] = useState<IFormInput | any>({
		category: "",
		position: "",
		skills: [],
		employmentType: "",
		englishLevel: "",
		hourRate: "",
		availableAmountOfHour: "",
	});
	const [toggleFilter, setToggleFilter] = useState<string>("reset");
	const [useFilters, setUseFilters] = useState<boolean>(false);

	let skillsIncludesArr: boolean[] = [];

	const filterSkillsCheck = (arr1: string[], arr2: string[]) => {
		const skillsIncluded = arr2.every(skill => arr1.includes(skill));
		return skillsIncluded;
	};

	const skillIncludesFunc = (arr1: string[][], arr2: string[]) => {
		arr1.map(job => {
			skillsIncludesArr.push(filterSkillsCheck(job, arr2));
		});
		return skillsIncludesArr;
	};

	useEffect(() => {
		if (toggleFilter === "filter") {
			const jobSkills = jobs.map(job => job.skills);
			const filterSkills = filter.skills;
			const skillsFilter = skillIncludesFunc(jobSkills, filterSkills);
			const newFilterJobs = jobs.filter(
				(job, index) =>
					job.position.toLowerCase().includes(filter.position.toLowerCase()) &&
					job.category.includes(filter.category) &&
					job.employmentType.includes(filter.employmentType) &&
					job.levelEnglish.includes(filter.englishLevel) &&
					job.hourRate.includes(filter.hourRate) &&
					skillsFilter[index],
			);
			setFilterJobs(newFilterJobs);
		}
	}, [toggleFilter, filter]);

	const onSubmit: SubmitHandler<IFormInput> = async values => {
		const freelancerInfo = {
			category: values.category.label,
			position: values.position || "",
			skills: values.skills.map(skill => skill.label),
			employmentType: values.employmentType.label,
			englishLevel: values.englishLevel.label,
			hourRate: values.hourRate.label,
			availableAmountOfHour: values.availableAmountOfHour.label,
		};
		setFilter(freelancerInfo);
		setToggleFilter("filter");
	};

	return (
		<StyledPage>
			<Dashboard userRole="freelancer">
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Wrapper>
						<InputContainer>
							<InputHeader>
								<StyledTitle tag="h2" fontSize="md" fontWeight={700}>
									{t("freelancer.searchWork.jobsList")}
								</StyledTitle>
								<StyledButton
									type="reset"
									buttonColor="redGradient"
									buttonSize="sm"
									fontSize="md"
									onClick={() => {
										setToggleFilter("reset");
										setFilterJobs(jobs);
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
								</StyledButton>
								<StyledButton
									type="button"
									disabled={useFilters ? true : false}
									buttonColor="redGradient"
									buttonSize="sm"
									fontSize="md"
									onClick={() => {
										setToggleFilter("reset");
										setFilterJobs(jobs);
										setUseFilters(true);
									}}
								>
									{t("freelancer.searchWork.buttonFilter")}
								</StyledButton>
							</InputHeader>
							<InputWrapper>
								<Pagination itemsPerPage={6} user={user} jobs={filterJobs} />
							</InputWrapper>
						</InputContainer>
						<InputContainer>
							<InputHeader>
								<StyledTitle tag="h2" fontSize="md" fontWeight={700}>
									{t("freelancer.searchWork.filter")}
								</StyledTitle>
							</InputHeader>
							<InputWrapper>
								<Controller
									name="position"
									control={control}
									render={({ field }) => (
										<input
											disabled={useFilters ? false : true}
											{...field}
											defaultValue=""
											placeholder={t("freelancer.createProfile.positionPlaceholder")}
										/>
									)}
								/>
								<div className="selectContainer">
									<div className="selectContainer__left">
										<div className="selectContainer__select">
											<Controller
												name="skills"
												control={control}
												defaultValue={[]}
												render={({ field }) => (
													<>
														<label htmlFor="skills">
															{t("freelancer.createProfile.selectOption.skills")}
														</label>
														<SelectElement
															id="skills"
															isDisabled={useFilters ? false : true}
															options={skills}
															{...field}
															placeholder=""
															isSearchable
															isMulti
															classNamePrefix="react-select"
														/>
													</>
												)}
											/>
										</div>
										<div className="selectContainer__select">
											<Controller
												name="category"
												control={control}
												defaultValue={emptyValue}
												render={({ field }) => (
													<>
														<label htmlFor="category">
															{t("freelancer.createProfile.selectOption.category")}
														</label>
														<SelectElement
															id="category"
															isDisabled={useFilters ? false : true}
															options={categories}
															{...field}
															placeholder={t("freelancer.createProfile.selectOption.category")}
															isSearchable
															classNamePrefix="react-select"
														/>
													</>
												)}
											/>
										</div>
										<div className="selectContainer__select">
											<Controller
												name="employmentType"
												control={control}
												defaultValue={emptyValue}
												render={({ field }) => (
													<>
														<label htmlFor="employmentType">
															{t("freelancer.createProfile.selectOption.employmentType")}
														</label>
														<SelectElement
															id="employmentType"
															isDisabled={useFilters ? false : true}
															options={employmentType}
															{...field}
															placeholder={t(
																"freelancer.createProfile.selectOption.employmentType",
															)}
															classNamePrefix="react-select"
														/>
													</>
												)}
											/>
										</div>
									</div>
									<div className="selectContainer__right">
										<div className="selectContainer__select">
											<Controller
												name="hourRate"
												control={control}
												defaultValue={emptyValue}
												render={({ field }) => (
													<>
														<label htmlFor="hourRate">
															{t("freelancer.createProfile.selectOption.hourRate")}
														</label>
														<SelectElement
															id="hourRate"
															isDisabled={useFilters ? false : true}
															options={hourRate}
															{...field}
															placeholder={t("freelancer.createProfile.selectOption.hourRate")}
															isSearchable
															classNamePrefix="react-select"
														/>
													</>
												)}
											/>
										</div>
										<div className="selectContainer__select">
											<Controller
												name="englishLevel"
												control={control}
												defaultValue={emptyValue}
												render={({ field }) => (
													<>
														<label htmlFor="englishLevel">
															{t("freelancer.createProfile.selectOption.englishLevel")}
														</label>
														<SelectElement
															id="englishLevel"
															isDisabled={useFilters ? false : true}
															options={englishLevel}
															{...field}
															placeholder={t("freelancer.createProfile.selectOption.englishLevel")}
															isSearchable
															classNamePrefix="react-select"
														/>
													</>
												)}
											/>
										</div>
										<div className="selectContainer__select">
											<Controller
												name="availableAmountOfHour"
												control={control}
												defaultValue={emptyValue}
												render={({ field }) => (
													<>
														<label htmlFor="availableAmountOfHour">
															{t("freelancer.createProfile.selectOption.amountHours")}
														</label>
														<SelectElement
															id="availableAmountOfHour"
															isDisabled={useFilters ? false : true}
															options={hoursAmount}
															{...field}
															placeholder={t("freelancer.createProfile.selectOption.amountHours")}
															classNamePrefix="react-select"
														/>
													</>
												)}
											/>
										</div>
									</div>
								</div>
								<div className="selectContainer__buttons">
									<StyledButton
										type="submit"
										disabled={useFilters ? false : true}
										buttonColor="redGradient"
										buttonSize="sm"
										fontSize="md"
									>
										<strong>{t("freelancer.searchWork.filter")}</strong>
									</StyledButton>
									<StyledButton
										type="reset"
										disabled={useFilters ? false : true}
										onClick={() => {
											setFilterJobs(jobs);
											setToggleFilter("reset");
											reset();
										}}
										buttonColor="redGradient"
										buttonSize="sm"
										fontSize="md"
									>
										<strong>{t("freelancer.searchWork.unFilter")}</strong>
									</StyledButton>
								</div>
							</InputWrapper>
						</InputContainer>
					</Wrapper>
				</Form>
			</Dashboard>
		</StyledPage>
	);
}

export default SearchWork;
