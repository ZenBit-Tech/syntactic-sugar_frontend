import { SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { IFormInput } from "./index";
import { useGetJobsQuery } from "src/redux/jobs";

export const useSearchWorkFormHook = () => {
	const { isLoading, isError, data, isSuccess } = useGetJobsQuery();
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
	const onSubmit: SubmitHandler<IFormInput> = values => {
		console.log(values);
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
        console.log(data);
    }, [isSuccess]);

	return { onSubmit, setFilter, setToggleFilter, filter, toggleFilter,  filterJobs, setFilterJobs, data, isSuccess};
};
