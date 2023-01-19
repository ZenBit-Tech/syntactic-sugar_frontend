import { SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import {
	IResponse,
	useGetAllFreelancersQuery,
} from "src/redux/createFreelancer/freelancer-pageApi";
import { SelectOptions } from "src/utils/select-options/options";
import { FILTER } from "utils/constants/breakpoint";

interface IUseSearchTalentsFormHook {
	onSubmit: SubmitHandler<IFormInput>;
	setToggleFilter: React.Dispatch<React.SetStateAction<string>>;
	setFilterTalents: React.Dispatch<React.SetStateAction<IResponse[] | undefined>>;
	talents?: IResponse[];
	filterTalents?: IResponse[];
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

export const useSearchTalentsFormHook = (): IUseSearchTalentsFormHook => {
	const { data: talents } = useGetAllFreelancersQuery();
	const [filterTalents, setFilterTalents] = useState<IResponse[] | undefined>(talents);
	const [toggleFilter, setToggleFilter] = useState<string>("reset");
	const [filter, setFilter] = useState<IFreelancerInfo>();

	const onSubmit: SubmitHandler<IFormInput> = values => {
		const freelancerInfo = {
			category: values?.category?.label || "",
			position: values.position || "",
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
		setFilterTalents(talents);
	}, [talents]);

	useEffect(() => {
		if (toggleFilter === FILTER) {
			const skills = talents && talents.map(freelancer => freelancer.skills);
			const filterFreelancerSkills = (skills &&
				skills.map(skill => skill.map(item => item.name || ""))) || [[""]];
			const filterSkills = filter?.skills || [""];
			const skillsFilter = skillIncludesFunc(filterFreelancerSkills, filterSkills);
			const newFilterTalents =
				talents &&
				talents.filter(
					(talent, index: number) =>
						talent.position.toLowerCase().includes(filter?.position?.toLowerCase() || "") &&
						talent.category.name.includes(filter?.category || "") &&
						talent.employmentType.includes(filter?.employmentType || "") &&
						talent.englishLevel.includes(filter?.englishLevel || "") &&
						talent.hourRate.includes(filter?.hourRate || "") &&
						talent.availableAmountOfHours.includes(filter?.availableAmountOfHour || "") &&
						skillsFilter[index],
				);

			setFilterTalents(newFilterTalents);
		}
	}, [toggleFilter, filter]);

	const filterSkillsCheck = (arr1: string[], arr2: string[]) => {
		const skillsIncluded = arr2.every(skill => arr1.includes(skill));

		return skillsIncluded;
	};

	const skillIncludesFunc = (arr1: string[][], arr2: string[]) => {
		const skillsIncludesArr: boolean[] = [];

		arr1.map(talent => {
			skillsIncludesArr.push(filterSkillsCheck(talent, arr2));
		});

		return skillsIncludesArr;
	};

	return {
		onSubmit,
		setToggleFilter,
		setFilterTalents,
		talents,
		filterTalents,
	};
};
