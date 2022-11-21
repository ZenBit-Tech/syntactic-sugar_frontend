import { createSlice } from '@reduxjs/toolkit';

type Profile = {
    fullName: string;
	category: string;
	position: string;
	skills: string;
	employmentType: string;
	country: string;
	hourRate: string;
	hoursAmount: string;
	experience: string;
	englishLevel: string;
};

type ProfileState = {
    list: Profile[]
}

const initialState: ProfileState = {
    list: []
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addProfileInfo(state, action) {
      state.list.push(action.payload)
    },
  },
})

export const { addProfileInfo } = profileSlice.actions
export default profileSlice.reducer