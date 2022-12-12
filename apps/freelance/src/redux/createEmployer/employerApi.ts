import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";
import { RootState } from "redux/store";

interface IFormInput {
	fullName: string;
	companyName: string;
	position: string;
	phone: string;
	linkedIn: string;
	website: string;
	aboutUs: string;
}

export const createEmployerApi = createApi({
	reducerPath: "createEmployer",
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).user.token;
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}

			return headers;
		},
	}),
	tagTypes: ["employer"],
	endpoints: builder => ({
		createEmployer: builder.mutation({
			query: (body: IFormInput) => ({
				url: "employer/create",
				method: "POST",
				body,
			}),
			invalidatesTags: ["employer"],
		}),
	}),
});

export const { useCreateEmployerMutation } = createEmployerApi;
