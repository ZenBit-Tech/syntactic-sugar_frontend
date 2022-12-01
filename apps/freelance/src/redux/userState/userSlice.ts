import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
	token: string | null;
}

const initialState: UserState = {
	token: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setToken(state, action: PayloadAction<{ token: string }>) {
			state.token = action.payload.token;
		},
		unsetToken: state => {
			state.token = null;
		},
	},
});

export const { setToken, unsetToken } = userSlice.actions;
export const getToken = (state: RootState) => state.user.token;
