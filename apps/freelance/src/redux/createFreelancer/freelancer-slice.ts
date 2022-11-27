import { createSlice } from "@reduxjs/toolkit";

type Freelancer = {
	fullName: string;
	category: string;
	position: string;
	skills: string;
	employmentType: string;
	country: string;
	hourRate: string;
	availableAmountOfHour: string;
	workExperience: string;
	englishLevel: string;
};

type FreelancerState = {
	list: Freelancer[];
};

const initialState: FreelancerState = {
	list: [],
};

const freelancerSlice = createSlice({
	name: "freelancer",
	initialState,
	reducers: {
		addFreelancerInfo(state, action) {
			console.log(action);
			state.list.push(action.payload);
		},
	},
});

export const { addFreelancerInfo } = freelancerSlice.actions;
export default freelancerSlice.reducer;
