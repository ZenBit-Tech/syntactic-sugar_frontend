import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";
import { workHistoryProps, educationProps } from "redux/createFreelancer/freelancer-slice";
import { RootState } from "redux/store";
export interface IFormInput {
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
	education: educationProps[];
	workHistory: workHistoryProps[];
	otherExperience: string;
}

export interface Published {
	isPublished: boolean;
}

export interface IResponse {
	id: string;
	fullName: string;
	category: string;
	position: string;
	skills: string[];
	employmentType: string;
	country: { id: number; name: string };
	hourRate: string;
	availableAmountOfHours: string;
	workExperience: string;
	englishLevel: string;
	education?: educationProps[];
	workHistory?: workHistoryProps[];
	otherExperience?: string;
}

export const createFreelancerApi = createApi({
	reducerPath: "createFreelancer",
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).user.token;
			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}

			return headers;
		},
	}),
	tagTypes: ["freelancer", "published"],
	endpoints: builder => ({
		createFreelancer: builder.mutation({
			query: (body: IFormInput) => ({
				url: "freelancer/create",
				method: "POST",
				body,
			}),
			invalidatesTags: ["freelancer"],
		}),
		addPublished: builder.mutation({
			query: (body: Published) => ({
				url: "freelancer/create/published",
				method: "POST",
				body,
			}),
			invalidatesTags: ["published"],
		}),
		getFreelancer: builder.query<IResponse, void>({
			query: () => `/freelancer/profile`,
		}),
	}),
});

export const { useCreateFreelancerMutation, useAddPublishedMutation, useGetFreelancerQuery } =
	createFreelancerApi;
