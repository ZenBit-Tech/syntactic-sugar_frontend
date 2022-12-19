import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
export interface JobsInterface {
	id: number;
	position: string;
	location: string;
	title: string;
	employmentType: string;
	hourRate: string;
	availableAmountOfHours: string;
	workExperience: string;
	otherRequirenments: string;
	description: string;
	date: string;
	category: string;
	countries: string[];
	employer?: string;
	skills: string[];
	isPublished?: boolean;
	isProposal?: boolean;
}

export const getJobsApi = createApi({
	reducerPath: "jobs",
	baseQuery: baseQuery,
	refetchOnFocus: true,
	tagTypes: ["jobs", "job"],
	endpoints: build => ({
		getJobs: build.query<JobsInterface[], void>({
			query: () => ({
				url: "jobs/get-all-jobs",
			}),
			providesTags: ["jobs"],
		}),
		getJobId: build.query<JobsInterface, string>({
			query: (id: string) => ({
				url: `/jobs/get-job-by-id/:${id}`,
			}),
			providesTags: ["job"],
		}),
	}),
});

export const { useGetJobsQuery, useGetJobIdQuery } = getJobsApi;
