import { configureStore } from "@reduxjs/toolkit";
import userReducer from './example-slice';
import profileReducer from "./profile-slice";
import  {signupGoogleApi } from './signup-googleApi';

const store = configureStore({
    reducer: {
      user: userReducer,
      profile: profileReducer,
      [signupGoogleApi.reducerPath]: signupGoogleApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(signupGoogleApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


