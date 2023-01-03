import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";

interface IFormInput {
	fullName: string;
	companyName: string;
	position: string;
	phone: string;
	linkedIn: string;
	website: string;
	aboutUs: string;
	image: string;
}

interface IResponseEmployer {
	fullName: string;
	companyName: string;
	position: string;
	phone: string;
	linkedIn: string;
	website: string;
	aboutUs: string;
	image: string;
	user: {
		id: string;
		email: string;
	};
}

export const createEmployerApi = createApi({
	reducerPath: "createEmployer",
	baseQuery: baseQuery,
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
		getEmployer: builder.query<IResponseEmployer, void>({
			query: () => `/employer/profile`,
			providesTags: ["employer"],
		}),
	}),
});

export const { useCreateEmployerMutation, useGetEmployerQuery } = createEmployerApi;
