import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "node:fs";

export interface educationProps {
	institute: string;
	occupation: string;
	period: string;
}

export interface workHistoryProps {
	company: string;
	workPosition: string;
	period: string;
}

type Freelancer = {
	fullName: string;
	category: string;
	position: string;
	skills: string[];
	employmentType: string;
	country: string;
	hourRate: string;
	availableAmountOfHour: string;
	workExperience: string;
	englishLevel: string;
	education: educationProps[];
	workHistory: workHistoryProps[];
	otherExperience: string;
};

const initialState: Freelancer = {
	fullName: "",
	category: "",
	position: "",
	skills: [],
	employmentType: "",
	country: "",
	hourRate: "",
	availableAmountOfHour: "",
	workExperience: "",
	englishLevel: "",
	education: [],
	workHistory: [],
	otherExperience: "",
};

const freelancer = createSlice({
	name: "freelancer",
	initialState,
	reducers: {
		addFreelancerInfo(state, action) {
			const payload = action.payload;
			const currentState = JSON.parse(JSON.stringify(state));
			Object.keys(currentState).map(key => {
				if (payload[key]) {
					state[key as keyof typeof initialState] = payload[key];
				}
			});
		},
	},
});

export const { addFreelancerInfo } = freelancer.actions;
export default freelancer.reducer;
