import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseUrl } from "src/utils/constants/redux-query";
import type { RootState } from "./store";

export const baseQuery = fetchBaseQuery({
	baseUrl: baseUrl,
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).user.token;

		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}

		return headers;
	},
});
