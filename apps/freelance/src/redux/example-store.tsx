import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './example-slice';

 export const store = configureStore({
    reducer: {
      counter: counterReducer,
    }
});



