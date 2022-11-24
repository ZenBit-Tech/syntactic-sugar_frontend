import { configureStore } from "@reduxjs/toolkit";
import userReducer from './example-slice';
import profileReducer from "./profile-slice";
import { signupGoogleApi } from './signup-googleApi';
import { resetPasswordApi } from "./reset-password/reset-password-slice";
import { loginApi } from "./login.api";

const store = configureStore({
	reducer: {
		user: userReducer,
		rofile: profileReducer,
		[signupGoogleApi.reducerPath]: signupGoogleApi.reducer,
		[loginApi.reducerPath]: loginApi.reducer,
		[resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			signupGoogleApi.middleware,
			loginApi.middleware,
			resetPasswordApi.middleware,
		),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
