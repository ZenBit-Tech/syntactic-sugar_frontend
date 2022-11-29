import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";

interface IFormInput {
	fullName: string;
	category: string;
	position: string;
	skills: string[];
	employmentType: string;
	country: string;
	hourRate: string;
	availableAmountOfHour: string;
	workExperience: string;
	englishLevel: string;
}

export const createFreelancerApi = createApi({
	reducerPath: "createFreelancer",
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
	}),
	tagTypes: ["freelancer"],
	endpoints: builder => ({
		createFreelancer: builder.mutation({
			query: (body: IFormInput) => ({
				url: "freelancer/freelancer/create", // here must be correct path from be
				method: "POST",
				body,
			}),
			invalidatesTags: ["freelancer"],
		}),
	}),
});

export const { useCreateFreelancerMutation } = createFreelancerApi;
