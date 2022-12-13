import { IFormInput } from "./index";
import { SubmitHandler } from "react-hook-form";
import React, { useState } from "react";

export const useSearchWorkFormHook = () => {
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

	return { onSubmit, setFilter, setToggleFilter, filter, toggleFilter };
};
