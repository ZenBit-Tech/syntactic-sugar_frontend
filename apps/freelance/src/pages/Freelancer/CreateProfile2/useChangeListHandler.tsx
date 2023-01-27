import { educationProps, workHistoryProps } from "src/redux/createFreelancer/freelancer-slice";

export enum listOption {
	EDUCATION = "EDUCATION",
	WORK_HISTORY = "WORK_HISTORY",
}

export const useChangeListHandler = (
	setEducationList: any,
	setWorkHistoryList: any,
	educationList: educationProps[],
	workHistoryList: workHistoryProps[],
) => {
	const handleChangeList = (
		index: number,
		event: React.FormEvent<HTMLInputElement>,
		option: listOption,
	): void => {
		const name = (event.target as HTMLInputElement).name;
		const value = (event.target as HTMLInputElement).value;

		if (option === listOption.EDUCATION) {
			const list = [...educationList];
			const newEducationList = list.map((it, position) => {
				if (position === index) {
					return { ...it, [name]: value };
				}

				return it;
			});

			setEducationList(newEducationList);
		} else {
			const list = [...workHistoryList];
			const newWorkHistoryList = list.map((it, position) => {
				if (position === index) {
					return { ...it, [name]: value };
				}

				return it;
			});

			setWorkHistoryList(newWorkHistoryList);
		}
	};

	return { handleChangeList };
};
