import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { persistedReducer } from "./userState/userPersist";
import freelancerReducer from "./createFreelancer/freelancer-slice";
import newJobReducer from "./jobs/new-job-posting-slice";
import { signupGoogleApi } from "./signup-googleApi";
import { resetPasswordApi } from "./resetPassword/resetPasswordSlice";
import { createFreelancerApi } from "./createFreelancer/freelancer-pageApi";
import { loginApi } from "./login.api";
import { roleApi } from "./role.api";
import { proposalFreelancerApi } from "./sendProposalFreelancer/proposalApi";
import { getJobsApi } from "./jobs/jobs.api";
import { createEmployerApi } from "./createEmployer/employerApi";
import { uploadImage } from "./uploadImage/upload-image.api";
import { chatApi } from "./chat/chatApi";

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
		[roleApi.reducerPath]: roleApi.reducer,
		[proposalFreelancerApi.reducerPath]: proposalFreelancerApi.reducer,
		[getJobsApi.reducerPath]: getJobsApi.reducer,
		[createEmployerApi.reducerPath]: createEmployerApi.reducer,
		[uploadImage.reducerPath]: uploadImage.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
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
			proposalFreelancerApi.middleware,
			getJobsApi.middleware,
			createEmployerApi.middleware,
			uploadImage.middleware,
      chatApi.middleware,
		),
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
