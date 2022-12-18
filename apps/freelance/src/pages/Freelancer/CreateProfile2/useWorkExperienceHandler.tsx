import { useState } from "react";

export interface workExperienceProps {
	company: string;
	workPosition: string;
	period: string;
}

export const workExperience = {
	company: "",
	workPosition: "",
	period: "",
};

export const useWorkExperienceHandler = () => {
	const [workExperienceList, setWorkExperienceList] = useState<workExperienceProps[]>([]);

	const handleAddWorkExperience = () => {
		setWorkExperienceList(prev => [...prev, workExperience]);
	};

	const handleRemoveWorkExperience = (index: number) => {
		const list = [...workExperienceList];
		list.splice(index, 1);
		setWorkExperienceList(list);
	};

	return {
		workExperienceList,
		setWorkExperienceList,
		handleAddWorkExperience,
		handleRemoveWorkExperience,
		workExperience,
	};
};
