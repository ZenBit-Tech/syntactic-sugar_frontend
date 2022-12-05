import { useState } from "react";
import { workHistoryProps } from "redux/createFreelancer/freelancer-slice";

export const workHistory = {
	company: "",
	workPosition: "",
	period: "",
};

export const useWorkHistoryHandler = () => {
	const [workHistoryList, setWorkHistoryList] = useState<workHistoryProps[]>([]);

	const handleAddWorkHistory = () => {
		setWorkHistoryList(prev => [...prev, workHistory]);
	};

	const handleRemoveWorkHistory = (index: number) => {
		const list = [...workHistoryList];
		list.splice(index, 1);
		setWorkHistoryList(list);
	};

	return {
		workHistoryList,
		setWorkHistoryList,
		handleAddWorkHistory,
		handleRemoveWorkHistory,
		workHistory,
	};
};
