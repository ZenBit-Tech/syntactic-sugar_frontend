import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface educationProps {
	id?: string;
	institute: string;
	occupation: string;
	period: string;
}

export interface workHistoryProps {
	id?: string;
	company: string;
	workPosition: string;
	period: string;
}

export type Freelancer = {
	fullName: string;
	category: string;
	position: string;
	skills: string[];
	employmentType: string;
	country: string;
	hourRate: string;
	availableAmountOfHours: string;
	workExperience: string;
	englishLevel: string;
	education: educationProps[];
	workHistory: workHistoryProps[];
	otherExperience: string;
	image: string;
};

const initialState: Freelancer = {
	fullName: "",
	category: "",
	position: "",
	skills: [],
	employmentType: "",
	country: "",
	hourRate: "",
	availableAmountOfHours: "",
	workExperience: "",
	englishLevel: "",
	education: [],
	workHistory: [],
	otherExperience: "",
	image: "",
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
