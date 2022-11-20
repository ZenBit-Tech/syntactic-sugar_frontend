import { configureStore } from "@reduxjs/toolkit";
import userReducer from './example-slice';
import { loginApi } from "./login.api";
import {signupGoogleApi} from './signup-googleApi';

const store = configureStore({
    reducer: {
      user: userReducer,
      [signupGoogleApi.reducerPath]: signupGoogleApi.reducer,
      [loginApi.reducerPath]: loginApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(signupGoogleApi.middleware, loginApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


