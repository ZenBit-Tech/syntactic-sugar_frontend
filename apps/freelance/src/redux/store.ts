import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./example-slice";
import freelancerReducer from "./createFreelancer/freelancer-slice";
import newJobReducer from "./newJobPosting/new-job-posting-slice";
import { signupGoogleApi } from "./signup-googleApi";
import { resetPasswordApi } from "./resetPassword/reset-password-slice";
import { createFreelancerApi } from "./createFreelancer/freelancer-pageApi";
import { loginApi } from "./login.api";
import { roleApi } from "./role.api";

const store = configureStore({
	reducer: {
		user: userReducer,
		freelancer: freelancerReducer,
		newJob: newJobReducer,
		[signupGoogleApi.reducerPath]: signupGoogleApi.reducer,
		[loginApi.reducerPath]: loginApi.reducer,
		[resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
		[createFreelancerApi.reducerPath]: createFreelancerApi.reducer,
		[roleApi.reducerPath]: roleApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			signupGoogleApi.middleware,
			loginApi.middleware,
			resetPasswordApi.middleware,
			createFreelancerApi.middleware,
			roleApi.middleware,
		),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
