import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";

interface educationProps {
	institute: string;
	occupation: string;
	period: string;
}

interface workExperienceProps {
	company: string;
	workPosition: string;
	period: string;
}

interface CreateFreelancerP2 {
	education: educationProps[];
	workExperience: workExperienceProps[];
}

interface Published {
	isPublished: boolean;
}

export const createFreelancerP2Api = createApi({
	reducerPath: "createFreelancerP2Server",
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
	}),
	refetchOnFocus: true,
	endpoints: build => ({
		createFreelancerP2: build.mutation({
			query: (body: CreateFreelancerP2) => ({
				url: "freelancer/createFreeP2",
				method: "POST",
				body,
			}),
		}),
		addPublished: build.mutation<any, Published>({
			query: (body: Published) => ({
				url: "freelancer/createFreeP2",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useAddPublishedMutation, useCreateFreelancerP2Mutation } = createFreelancerP2Api