import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";
import { workHistoryProps, educationProps } from "redux/createFreelancer/freelancer-slice";

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
	education: educationProps[];
	workHistory: workHistoryProps[];
	otherExperience: string;
}

interface Published {
	isPublished: boolean;
}

export const createFreelancerApi = createApi({
	reducerPath: "createFreelancer",
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
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
	}),
});

export const { useCreateFreelancerMutation, useAddPublishedMutation } = createFreelancerApi;
