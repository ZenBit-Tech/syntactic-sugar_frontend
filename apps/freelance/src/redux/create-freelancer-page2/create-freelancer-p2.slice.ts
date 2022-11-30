import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface educationProps {
	institute: string;
	occupation: string;
	period: string;
}

interface workExperienceProps {
	company: string;
	workPosition: string;
	period: string;
}

interface CreateFreelancerP2 {
	education: educationProps[];
	workExperience: workExperienceProps[];
}

const initialState: CreateFreelancerP2 = {
	education: [],
	workExperience: [],
};

export const CreateFreelancerP2 = createSlice({
	name: "CreateFreelanceP2",
	initialState,
	reducers: {
		createFreelancerP2(state, action) {
			state.education.push(action.payload.education);
			state.workExperience.push(action.payload.workExperience);
		},
	},
});

export const { createFreelancerP2 } = CreateFreelancerP2.actions;
export const createFreelancerP2Reducer = CreateFreelancerP2.reducer;