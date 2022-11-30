import { createSlice } from "@reduxjs/toolkit";

type Freelancer = {
	fullName: string;
	category: string;
	position: string;
	skills: [];
	employmentType: string;
	country: string;
	hourRate: string;
	availableAmountOfHour: string;
	workExperience: string;
	englishLevel: string;
};

type FreelancerState = Freelancer[];

const initialState: FreelancerState = [];

const freelancer = createSlice({
	name: "freelancer",
	initialState,
	reducers: {
		addFreelancerInfo(state, action) {
			state.push(action.payload);
		},
	},
});

export const { addFreelancerInfo } = freelancer.actions;
export default freelancer.reducer;
