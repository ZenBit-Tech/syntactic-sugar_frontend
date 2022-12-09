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

	const [filterJobs, setFilterJobs] = useState(jobs);
	const [filter, setFilter] = useState<any>({
		category: "",
		position: "",
		skills: [],
		employmentType: "",
		englishLevel: "",
		hourRate: "",
		availableAmountOfHour: "",
	});
	const [toggleFilter, setToggleFilter] = useState<string>("reset");

	useEffect(() => {
		if (toggleFilter === "filter") {
			const newFilterJobs = jobs.filter(
				job =>
					job.position.toLowerCase().includes(filter.position.toLowerCase()) &&
					job.category.includes(filter.category) &&
					job.employmentType.includes(filter.employmentType) &&
					job.levelEnglish.includes(filter.englishLevel) &&
					job.hourRate.includes(filter.hourRate),
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
		console.log({ onSubmit: freelancerInfo, position: freelancerInfo.position });
		setFilter(freelancerInfo);
		setToggleFilter("filter");
	};

	console.log(toggleFilter, filter, filterJobs);

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
										buttonColor="redGradient"
										buttonSize="sm"
										fontSize="md"
									>
										<strong>{t("freelancer.searchWork.filter")}</strong>
									</StyledButton>
									<StyledButton
										type="reset"
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
