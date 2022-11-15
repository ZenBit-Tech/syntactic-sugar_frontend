import { configureStore } from '@reduxjs/toolkit';
import userReducer from './example-slice';
import { resetPasswordApi } from './reset-password/reset-password-slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    [resetPasswordApi.reducerPath]: resetPasswordApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(resetPasswordApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
