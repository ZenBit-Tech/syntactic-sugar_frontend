import { useState } from "react";
import { educationProps } from "redux/createFreelancer/freelancer-slice";

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
