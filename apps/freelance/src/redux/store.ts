import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth.api";
import userReducer from './example-slice';

const store = configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
      user: userReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


