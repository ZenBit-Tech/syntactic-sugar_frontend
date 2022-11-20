import { configureStore } from '@reduxjs/toolkit';
import userReducer from './example-slice';
import { resetPasswordApi } from './reset-password/reset-password-slice';
import {signupGoogleApi} from './signup-googleApi';

const store = configureStore({
  reducer: {
    user: userReducer,
    [resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
    [signupGoogleApi.reducerPath]: signupGoogleApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(resetPasswordApi.middleware).concat(signupGoogleApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
