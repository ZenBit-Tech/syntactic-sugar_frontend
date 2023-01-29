import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { IUserState } from "redux/interfaces/IUserData";
import { Role } from "redux/interfaces/Role";
import { Token } from "redux/interfaces/Token";

const initialState: IUserState = {
	token: null,
	role: "GUEST",
	isProfile: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserData(state, action: PayloadAction<{ token: Token; role: Role | undefined }>) {
			state.token = action.payload.token;
			state.role = action.payload.role;
		},
		unsetUserData: state => {
			state.token = null;
			state.role = "GUEST";
		},
		setProfile(state, action: PayloadAction<{ isProfile: boolean | undefined }>) {
			state.isProfile = action.payload.isProfile;
		},
	},
});

export const { setUserData, unsetUserData, setProfile } = userSlice.actions;
export const getToken = (state: RootState) => state.user.token;
export const getRole = (state: RootState) => state.user.role;
export const getProfile = (state: RootState) => state.user.isProfile;
