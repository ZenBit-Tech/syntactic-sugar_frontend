import { SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { JobsInterface, useGetJobsQuery } from "src/redux/jobs";
import { useGetFreelancerQuery } from "src/redux/createFreelancer/freelancer-pageApi";
import { SelectOptions } from "src/utils/select-options/options";

interface useSearchTalentsFormHook {
	onSubmit: SubmitHandler<IFormInput>;
	setFilter: (freelancerFilter: IFormInput | Record<string, never>) => void;
	setToggleFilter: React.Dispatch<React.SetStateAction<string>>;
	publishedFilterJobs?: JobsInterface[];
	setFilterJobs: React.Dispatch<React.SetStateAction<JobsInterface[] | undefined>>;
	data?: JobsInterface[];
	freelancerFilter: IFormInput | {};
	refetch: () => void;
	isLoading: boolean;
}

interface JobSkills {
	id: string;
	name: string;
}

export interface IFormInput {
	category: SelectOptions;
	position: string;
	skills: SelectOptions[];
	employmentType: SelectOptions;
	englishLevel: SelectOptions;
	hourRate: SelectOptions;
	availableAmountOfHour: SelectOptions;
}

export const useSearchTalentsFormHook = (): useSearchTalentsFormHook => {
	const { data, isLoading } = useGetJobsQuery();
	const { data: freelancerData, refetch } = useGetFreelancerQuery();
	const [filterJobs, setFilterJobs] = useState(data);
	const [toggleFilter, setToggleFilter] = useState<string>("reset");
	const [filter, setFilter] = useState<IFormInput | any>({
		category: "",
		position: "",
		skills: [],
		employmentType: "",
		englishLevel: "",
		hourRate: "",
		availableAmountOfHour: "",
	});

	const publishedFilterJobs = filterJobs && filterJobs.filter(item => item.isPublished);

	const onSubmit: SubmitHandler<IFormInput> = values => {
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

	useEffect(() => {
		setFilterJobs(data);
	}, [data]);

	useEffect(() => {
		if (toggleFilter === "filter") {
			const jobSkills: JobSkills[][] | undefined = data?.map((job: JobsInterface) => job.skills);
			const filterJobsSkills: string[][] | undefined = jobSkills?.map((skill: JobSkills[]) => {
				return skill.map((item: JobSkills) => item.name);
			});
			const filterSkills = filter.skills;
			const skillsFilter = skillIncludesFunc(filterJobsSkills as string[][], filterSkills);
			const newFilterJobs =
				data &&
				data.filter(
					(job: JobsInterface, index: number) =>
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

	const freelancerFilter = {
		position: freelancerData?.position,
		category: freelancerData?.category.name,
		skills: freelancerData?.skills.map(skill => skill.name),
		employmentType: freelancerData?.employmentType,
		englishLevel: freelancerData?.englishLevel,
		hourRate: freelancerData?.hourRate,
		availableAmountOfHour: freelancerData?.availableAmountOfHours,
	};

	return {
		onSubmit,
		setFilter,
		setToggleFilter,
		publishedFilterJobs,
		setFilterJobs,
		data,
		freelancerFilter,
		refetch,
		isLoading,
	};
};
