import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";
import { RootState } from "redux/store";

interface JobsInterface {
	position: string;
	location: string;
	employmentType: string;
	availableAmountOfHours: string;
	workExperience: string;
	levelEnglish: string;
	date: string;
	isPublished: boolean;
	isProposal: boolean;
}

export const getJobsApi = createApi({
	reducerPath: "jobs",
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
	refetchOnFocus: true,
	endpoints: build => ({
		getJobs: build.query<JobsInterface[], void>({
			query: () => ({
				url: "jobs/get-all-jobs",
			}),
		}),
		getJobById: build.query<JobsInterface, void>({
			query: job => ({
				url: `jobs/${job}`,
			}),
		}),
	}),
});

export const { useGetJobsQuery, useGetJobByIdQuery } = getJobsApi;
