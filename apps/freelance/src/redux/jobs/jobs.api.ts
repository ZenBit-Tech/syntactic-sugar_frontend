import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
export interface JobsInterface {
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
	baseQuery: baseQuery,
	refetchOnFocus: true,
	endpoints: build => ({
		getJobs: build.query<JobsInterface[], void>({
			query: () => ({
				url: "jobs/get-all-jobs",
			}),
		}),
	}),
});

export const { useGetJobsQuery } = getJobsApi;
