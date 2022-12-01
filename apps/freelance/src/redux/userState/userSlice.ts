import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

type Role = "FREELACER" | "JOB_OWNER" | "GUEST";

interface UserState {
	token: string | null;
	role: Role;
}

const initialState: UserState = {
	token: null,
	role: "GUEST",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserData(state, action: PayloadAction<{ token: string; role: Role }>) {
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
