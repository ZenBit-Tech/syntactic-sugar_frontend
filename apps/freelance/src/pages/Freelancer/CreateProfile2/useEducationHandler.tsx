import { useState } from "react";

export interface educationProps {
	institute: string;
	occupation: string;
	period: string;
}

export const education = {
	institute: "",
	occupation: "",
	period: "",
};

export const useEducationHandler = () => {
	const [educationList, setEducationList] = useState<educationProps[]>([]);

	const handleAddEducation = () => {
		setEducationList(prev => [...prev, education]);
	};

	const handleRemoveEducation = (index: number) => {
		const list = [...educationList];
		list.splice(index, 1);
		setEducationList(list);
	};

	return { educationList, setEducationList, handleAddEducation, handleRemoveEducation, education };
};
