import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const userSlice = createSlice({
	name: "jobs",
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
