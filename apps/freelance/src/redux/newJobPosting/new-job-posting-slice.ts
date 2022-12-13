import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

interface INewJob {
	jobTitle: string;
	jobDescription: string;
	countries: string[];
	category: string;
	position: string;
	employmentType: string;
	availableAmountOfHour: string;
	workExperience: string;
	hourRate: string;
	skills: string[];
	englishLevel: string;
	otherRequirenments: string;
}

export const initialState: INewJob = {
	jobTitle: "",
	jobDescription: "",
	countries: [],
	category: "",
	position: "",
	employmentType: "",
	availableAmountOfHour: "",
	workExperience: "",
	hourRate: "",
	skills: [],
	englishLevel: "",
	otherRequirenments: "",
};

const newJob = createSlice({
	name: "newJob",
	initialState,
	reducers: {
		addNewJobInfo(state, action: PayloadAction<Object>) {
			const payload = JSON.parse(JSON.stringify(action.payload));
			const currentState = JSON.parse(JSON.stringify(state));

			Object.keys(currentState).map(key => {
				if (payload[key]) {
					state[key as keyof typeof initialState] = payload[key];
				}
			});
		},
	},
});

export const { addNewJobInfo } = newJob.actions;
export const getStoredJobInfo = (state: RootState) => state.newJob;

export default newJob.reducer;
