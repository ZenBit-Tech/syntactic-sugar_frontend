import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";

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
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
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
