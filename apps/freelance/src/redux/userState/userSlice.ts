import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { IUserState } from "redux/interfaces/IUserData";
import { Role } from "redux/interfaces/Role";
import { Token } from "../interfaces/Token";

const initialState: IUserState = {
	token: null,
	role: "GUEST",
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
	},
});

export const { setUserData, unsetUserData } = userSlice.actions;
export const getToken = (state: RootState) => state.user.token;
export const getRole = (state: RootState) => state.user.role;
