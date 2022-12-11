import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { INewJob } from "redux/interfaces/";

export const initialState: INewJob = {
	title: "",
	description: "",
	countries: [],
	category: "",
	position: "",
	employmentType: "",
	availableAmountOfHours: "",
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
		resetState(state, action: PayloadAction<Object>) {
			const payload = JSON.parse(JSON.stringify(action.payload));
			const currentState = JSON.parse(JSON.stringify(state));

			Object.keys(currentState).map(key => {
				state[key as keyof typeof initialState] = payload[key];
			});
		},
	},
});

export const { addNewJobInfo, resetState } = newJob.actions;
export const getStoredJobInfo = (state: RootState) => state.newJob;

export default newJob.reducer;
