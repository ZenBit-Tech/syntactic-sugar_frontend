import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { persistedReducer } from "./userState/userPersist";
import freelancerReducer from "./createFreelancer/freelancer-slice";
import { signupGoogleApi } from "./signup-googleApi";
import { resetPasswordApi } from "./resetPassword/resetPasswordSlice";
import { createFreelancerApi } from "./createFreelancer/freelancer-pageApi";
import { loginApi } from "./login.api";

const store = configureStore({
	reducer: {
		user: persistedReducer,
		freelancer: freelancerReducer,
		[signupGoogleApi.reducerPath]: signupGoogleApi.reducer,
		[loginApi.reducerPath]: loginApi.reducer,
		[resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
		[createFreelancerApi.reducerPath]: createFreelancerApi.reducer,
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
		),
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
