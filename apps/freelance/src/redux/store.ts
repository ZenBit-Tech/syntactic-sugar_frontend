import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { persistedReducer } from "./userState/userPersist";
import freelancerReducer from "./createFreelancer/freelancer-slice";
import newJobReducer from "./newJobPosting/new-job-posting-slice";
import { signupGoogleApi } from "./signup-googleApi";
import { resetPasswordApi } from "./resetPassword/resetPasswordSlice";
import { createFreelancerApi } from "./createFreelancer/freelancer-pageApi";
import { loginApi } from "./login.api";
import { roleApi } from "./role.api";
import { newJobPostingApi } from "./newJobPosting/new-job-posting-api";
import { getJobsApi } from "./jobs/jobs.api";
import { createEmployerApi } from "./createEmployer/employerApi";
import { uploadImage } from "./uploadImage/upload-image.api";

const store = configureStore({
	reducer: {
		user: persistedReducer,
		freelancer: freelancerReducer,
		newJob: newJobReducer,
		[signupGoogleApi.reducerPath]: signupGoogleApi.reducer,
		[loginApi.reducerPath]: loginApi.reducer,
		[roleApi.reducerPath]: roleApi.reducer,
		[resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
		[createFreelancerApi.reducerPath]: createFreelancerApi.reducer,
		[newJobPostingApi.reducerPath]: newJobPostingApi.reducer,
		[roleApi.reducerPath]: roleApi.reducer,
		[getJobsApi.reducerPath]: getJobsApi.reducer,
		[createEmployerApi.reducerPath]: createEmployerApi.reducer,
    [uploadImage.reducerPath]: uploadImage.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(
			signupGoogleApi.middleware,
			loginApi.middleware,
			resetPasswordApi.middleware,
			createFreelancerApi.middleware,
			roleApi.middleware,
			newJobPostingApi.middleware,
			getJobsApi.middleware,
			createEmployerApi.middleware,
      uploadImage.middleware,
		),
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
