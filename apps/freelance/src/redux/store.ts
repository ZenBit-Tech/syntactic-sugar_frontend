import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./example-slice";
import { resetPasswordApi } from "./reset-password/reset-password-slice";
import { signupGoogleApi } from "./signup-googleApi";
import { loginApi } from "./login.api";
import { createFreelancerP2Api } from "./create-freelancer-page2/create-freelancer-p2.api";
import { createFreelancerP2Reducer } from "./create-freelancer-page2/create-freelancer-p2.slice";
import { roleApi } from "./role.api";

const store = configureStore({
	reducer: {
		user: userReducer,
		[signupGoogleApi.reducerPath]: signupGoogleApi.reducer,
		[loginApi.reducerPath]: loginApi.reducer,
		[resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
    createFreelancerP2: createFreelancerP2Reducer,
    [createFreelancerP2Api.reducerPath]: createFreelancerP2Api.reducer,
    [roleApi.reducerPath]: roleApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			signupGoogleApi.middleware,
			loginApi.middleware,
			resetPasswordApi.middleware,
      createFreelancerP2Api.middleware,
      roleApi.middleware
		),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
