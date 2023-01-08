import { Controller } from "react-hook-form";
import { useOptions, SelectOptions } from "utils/select-options/options";
import { useEffect, useState } from "react";
import { BtnText, Form, HeaderButton, HeaderButtonWrapp, Input, Label, OpenFilterBtn, SelectElement } from "./searchwork-filter.styled";
import { useSearchWorkFormHook } from "../../../../../apps/freelance/src/pages/Freelancer/SearchWork/searchWorkFormHook";
import { JobsInterface, useGetJobsQuery } from "redux/jobs";
import { StyledButton } from "../styles/buttons";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ButtonWrapper } from "../job-details-card/job-details-card.styled";
import { useGetFreelancerQuery } from "redux/createFreelancer/freelancer-pageApi";

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

interface JobSkills {
	id: string;
	name: string;
}

interface IFilterProps {
    openFilter: () => void;
    closeFilter: () => void;
}

export const SearchWorkFilter = ({openFilter, closeFilter}: IFilterProps) => {
    const { t } = useTranslation();
    const { isLoading, isError, data, isSuccess } = useGetJobsQuery();
    const { handleSubmit, control, getValues, reset } = useForm<IFormInput>();
    const { data: freelancerData } = useGetFreelancerQuery();
    const [filterJobs, setFilterJobs] = useState(data);
    const [useFilters, setUseFilters] = useState<boolean>(false);
    const { onSubmit, setFilter, setToggleFilter, filter, toggleFilter } = useSearchWorkFormHook();
    
	const {
		categories,
		skills,
		employmentType,
		hourRate,
		hoursAmount,
		englishLevel,
    } = useOptions();

    const emptyValue = {
		value: "",
		label: "",
	};

    const freelancerFilter = {
		position: freelancerData?.position,
		category: freelancerData?.category.name,
		skills: freelancerData?.skills.map(skill => skill.name),
		employmentType: freelancerData?.employmentType,
		englishLevel: freelancerData?.englishLevel,
		hourRate: freelancerData?.hourRate,
		availableAmountOfHour: freelancerData?.availableAmountOfHours,
	};

    const filterSkillsCheck = (arr1: string[], arr2: string[]) => {
		const skillsIncluded = arr2.every(skill => arr1.includes(skill));

		return skillsIncluded;
	};

	const skillIncludesFunc = (arr1: string[][], arr2: string[]) => {
		const skillsIncludesArr: boolean[] = [];

		arr1.map(job => {
			skillsIncludesArr.push(filterSkillsCheck(job, arr2));
		});

		return skillsIncludesArr;
	};

    useEffect(() => {
		if (toggleFilter === "filter") {
			const jobSkills: JobSkills[][] | undefined = data?.map((job: JobsInterface) => job.skills);
			const filterJobsSkills: string[][] | undefined = jobSkills?.map((skill: JobSkills[]) => {
				return skill.map((item: JobSkills) => item.name);
			});
			const filterSkills = filter.skills;
			const skillsFilter = skillIncludesFunc(filterJobsSkills as string[][], filterSkills);
			const newFilterJobs = data?.filter(
				(job: JobsInterface, index) =>
					job.position.toLowerCase().includes(filter.position.toLowerCase()) &&
					job.category.name.includes(filter.category) &&
					job.employmentType.includes(filter.employmentType) &&
					job.englishLevel.includes(filter.englishLevel) &&
					job.hourRate.includes(filter.hourRate) &&
					job.availableAmountOfHours.includes(filter.availableAmountOfHour) &&
					skillsFilter[index],
			);

			setFilterJobs(newFilterJobs);
		}
    }, [toggleFilter, filter]);
    
    useEffect(() => {
		setFilterJobs(data);
    }, [isSuccess]);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <OpenFilterBtn
                type="button"
                buttonColor="redGradient"
                buttonSize="sm"
                fontSize="lg"
                onClick={openFilter}
            >
                <BtnText>
                    {t("freelancer.searchWork.buttonFilter")}
                </BtnText>  
			</OpenFilterBtn>
            <HeaderButtonWrapp>
                <HeaderButton
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
                </HeaderButton>
                <HeaderButton
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
                </HeaderButton>
            </HeaderButtonWrapp>
            <Controller
                name="position"
                control={control}
                render={({ field }) => (
                    <>
                        <Label htmlFor="position">
                            {t(`freelancer.createProfile.positionPlaceholder`)}
                        </Label>
                        <Input
                            {...field}
                            defaultValue=""
                            placeholder={t("freelancer.createProfile.positionPlaceholder")}
                            />
                        </>
                )}
            />
            <Controller
                name="category"
                control={control}
                render={({ field }) => (
                    <>
                        <Label htmlFor="category">
                            {t(`freelancer.createProfile.selectOption.category`)}
                        </Label>
                        <SelectElement
                            id="category"
                            options={categories}
                            {...field}
                            placeholder={t(`freelancer.createProfile.selectOption.category`)}
                            isSearchable
                            classNamePrefix="react-select"
                        />
                    </>
                )}
            />
            <Controller
                name="skills"
                control={control}
                render={({ field }) => (
                    <>
                        <Label htmlFor="skills">
                            {t(`freelancer.createProfile.selectOption.skills`)}
                        </Label>
                        <SelectElement
                            id="skills"
                            options={skills}
                            {...field}
                            placeholder={t(`freelancer.createProfile.selectOption.skills`)}
                            isSearchable
                            isMulti
                            classNamePrefix="react-select"
                        />
                    </>
                )}
            />
            <Controller
                name="employmentType"
                control={control}
                render={({ field }) => (
                    <>
                        <Label htmlFor="employmentType">
                            {t(`freelancer.createProfile.selectOption.employmentType`)}
                        </Label>
                        <SelectElement
                            id="employmentType"
                            options={employmentType}
                            {...field}
                            placeholder={t(`freelancer.createProfile.selectOption.employmentType`)}
                            isSearchable
                            classNamePrefix="react-select"
                        />
                    </>
                )}
            />
            <Controller
                name="englishLevel"
                control={control}
                render={({ field }) => (
                    <>
                        <Label htmlFor="englishLevel">
                            {t(`freelancer.createProfile.selectOption.englishLevel`)}
                        </Label>
                        <SelectElement
                            id="englishLevel"
                            options={englishLevel}
                            {...field}
                            placeholder={t(`freelancer.createProfile.selectOption.englishLevel`)}
                            isSearchable
                            classNamePrefix="react-select"
                        />
                    </>
                )}
            />
            <Controller
                name="hourRate"
                control={control}
                render={({ field }) => (
                    <>
                        <Label htmlFor="hourRate">
                            {t(`freelancer.createProfile.selectOption.hourRate`)}
                        </Label>
                        <SelectElement
                            id="hourRate"
                            options={hourRate}
                            {...field}
                            placeholder={t(`freelancer.createProfile.selectOption.hourRate`)}
                            isSearchable
                            classNamePrefix="react-select"
                        />
                    </>
                )}
            />
            <Controller
                name="availableAmountOfHour"
                control={control}
                render={({ field }) => (
                    <>
                        <Label htmlFor="availableAmountOfHour">
                            {t(`freelancer.createProfile.selectOption.availableAmountOfHour`)}
                        </Label>
                        <SelectElement
                            id="availableAmountOfHour"
                            options={hoursAmount}
                            {...field}
                            placeholder={t(`freelancer.createProfile.selectOption.availableAmountOfHour`)}
                            isSearchable
                            classNamePrefix="react-select"
                        />
                    </>
                )}
            />
            <ButtonWrapper>  
                <StyledButton
                    type="submit"
                    buttonColor="redGradient"
                    buttonSize="sm"
                    fontSize="md"
                    onClick={closeFilter}
                >
                    {t("freelancer.searchWork.filter")}
                </StyledButton>
                <StyledButton
                    type="reset"
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
            </ButtonWrapper>  
        </Form>
    )
}