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
		addNewJobInfo(state, action: PayloadAction<INewJob>) {
			const { payload } = action;

			return { ...state, ...payload };
		},
		resetState() {
			return { ...initialState };
		},
	},
});

export const { addNewJobInfo, resetState } = newJob.actions;
export const getStoredJobInfo = (state: RootState) => state.newJob;

export default newJob.reducer;
