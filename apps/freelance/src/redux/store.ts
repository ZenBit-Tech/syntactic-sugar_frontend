import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./example-slice";
import freelancerReducer from "./createFreelancer/freelancer-slice";
import { signupGoogleApi } from "./signup-googleApi";
import { resetPasswordApi } from "./reset-password/reset-password-slice";
import { createFreelancerApi } from "./createFreelancer/freelancer-pageApi";
import { loginApi } from "./login.api";

const store = configureStore({
	reducer: {
		user: userReducer,
		freelancer: freelancerReducer,
		[signupGoogleApi.reducerPath]: signupGoogleApi.reducer,
		[loginApi.reducerPath]: loginApi.reducer,
		[resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
		[createFreelancerApi.reducerPath]: createFreelancerApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			signupGoogleApi.middleware,
			loginApi.middleware,
			resetPasswordApi.middleware,
			createFreelancerApi.middleware,
		),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
