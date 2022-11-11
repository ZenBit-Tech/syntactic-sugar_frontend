import { configureStore } from "@reduxjs/toolkit";
import userReducer from './example-slice';
import {signupGoogleApi} from './signup-googleApi';

const store = configureStore({
    reducer: {
      user: userReducer,
      [signupGoogleApi.reducerPath]: signupGoogleApi.reducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


