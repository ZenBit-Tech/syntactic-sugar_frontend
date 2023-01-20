import { SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { JobsInterface, useGetJobsQuery } from "src/redux/jobs";
import { IResponse, useGetFreelancerQuery } from "src/redux/createFreelancer/freelancer-pageApi";
import { SelectOptions } from "src/utils/select-options/options";
import { FILTER } from "src/utils/constants/breakpoint";

interface IUseSearchWorkFormHook {
	onSubmit: SubmitHandler<IFormInput>;
	setFilter: (freelancerFilter: IFreelancerInfo) => void;
	setToggleFilter: React.Dispatch<React.SetStateAction<string>>;
	publishedFilterJobs?: JobsInterface[];
	setFilterJobs: React.Dispatch<React.SetStateAction<JobsInterface[] | undefined>>;
	data?: JobsInterface[];
	freelancerFilter: IFreelancerInfo;
	refetch: () => void;
	isLoading: boolean;
	proposals?: JobsInterface[];
	freelancerProfile?: IResponse;
	invitations?: JobsInterface[];
}

export interface IFormInput {
	category?: SelectOptions;
	position?: string;
	skills?: SelectOptions[];
	employmentType?: SelectOptions;
	englishLevel?: SelectOptions;
	hourRate?: SelectOptions;
	availableAmountOfHour?: SelectOptions;
}

export interface IFreelancerInfo {
	category: string;
	position: string;
	skills: string[];
	employmentType: string;
	englishLevel: string;
	hourRate: string;
	availableAmountOfHour: string;
}

export const useSearchWorkFormHook = (): IUseSearchWorkFormHook => {
	const { data, isLoading } = useGetJobsQuery();
	const { data: freelancerData, refetch } = useGetFreelancerQuery();
	const { data: freelancerProfile } = useGetFreelancerQuery();
	const [filterJobs, setFilterJobs] = useState<JobsInterface[] | undefined>(data);
	const [toggleFilter, setToggleFilter] = useState<string>("reset");
	const [filter, setFilter] = useState<IFreelancerInfo>();

	const publishedFilterJobs = filterJobs && filterJobs.filter(item => item.isPublished);

	const onSubmit: SubmitHandler<IFormInput> = values => {
		const freelancerInfo = {
			category: values?.category?.label || "",
			position: values?.position || "",
			skills: values?.skills?.map(skill => skill.label || "") || [""],
			employmentType: values?.employmentType?.label || "",
			englishLevel: values?.englishLevel?.label || "",
			hourRate: values?.hourRate?.label || "",
			availableAmountOfHour: values?.availableAmountOfHour?.label || "",
		};

		setFilter(freelancerInfo);
		setToggleFilter(FILTER);
	};

	useEffect(() => {
		setFilterJobs(data);
	}, [data]);

	useEffect(() => {
		if (toggleFilter === FILTER) {
			const jobSkills = data && data.map(job => job.skills);
			const filterJobsSkills = (jobSkills &&
				jobSkills.map(skill => skill.map(item => item.name || ""))) || [[""]];
			const filterSkills = filter?.skills || [""];
			const skillsFilter = skillIncludesFunc(filterJobsSkills, filterSkills);
			const newFilterJobs =
				data &&
				data.filter(
					(job, index: number) =>
						job.position.toLowerCase().includes(filter?.position?.toLowerCase() || "") &&
						job.category.name.includes(filter?.category || "") &&
						job.employmentType.includes(filter?.employmentType || "") &&
						job.englishLevel.includes(filter?.englishLevel || "") &&
						job.hourRate.includes(filter?.hourRate || "") &&
						job.availableAmountOfHours.includes(filter?.availableAmountOfHour || "") &&
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
		position: freelancerData?.position || "",
		category: freelancerData?.category.name || "",
		skills: freelancerData?.skills.map(skill => skill.name || "") || [""],
		employmentType: freelancerData?.employmentType || "",
		englishLevel: freelancerData?.englishLevel || "",
		hourRate: freelancerData?.hourRate || "",
		availableAmountOfHour: freelancerData?.availableAmountOfHours || "",
	};

	const proposals =
		publishedFilterJobs &&
		publishedFilterJobs.filter(
			job =>
				job.proposals.filter(
					proposal =>
						freelancerProfile &&
						freelancerProfile.proposals.filter(item => item.id === proposal.id).length > 0,
				).length > 0,
		);

	const invitations =
		publishedFilterJobs &&
		publishedFilterJobs.filter(
			job =>
				job.invitation.filter(
					inv =>
						freelancerProfile &&
						freelancerProfile.invitation.filter(item => item.id === inv.id).length > 0,
				).length > 0,
		);
	console.log(invitations);

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
		proposals,
		freelancerProfile,
		invitations,
	};
};
