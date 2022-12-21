import { createApi } from "@reduxjs/toolkit/query/react";
import { workHistoryProps, educationProps } from "redux/createFreelancer/freelancer-slice";
import { baseQuery } from "redux/base-query";
export interface IFormInput {
	fullName: string;
	category: string;
	position: string;
	skills: string[];
	employmentType: string;
	country: string;
	hourRate: string;
	availableAmountOfHours: string;
	workExperience: string;
	englishLevel: string;
	education: educationProps[];
	workHistory: workHistoryProps[];
	otherExperience: string;
	image: string;
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
	isPublished: boolean;
	image: string;
	user: { id: number; email: string };
}

export const createFreelancerApi = createApi({
	reducerPath: "createFreelancer",
	baseQuery: baseQuery,
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
			providesTags: ["freelancer"],
		}),
	}),
});

export const { useCreateFreelancerMutation, useAddPublishedMutation, useGetFreelancerQuery } =
	createFreelancerApi;
