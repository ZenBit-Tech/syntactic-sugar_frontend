import { persistReducer } from "redux-persist";
import { userSlice } from "./userSlice";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
	key: "user",
	storage,
	whitelist: ["token", "role"],
};

export const persistedReducer = persistReducer(userPersistConfig, userSlice.reducer);
