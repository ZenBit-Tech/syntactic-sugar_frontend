import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
export interface JobsInterface {
	id: number;
	position: string;
	location: string;
	title: string;
	employmentType: string;
	englishLevel: string;
	hourRate: string;
	availableAmountOfHours: string;
	workExperience: string;
	otherRequirenments: string;
	description: string;
	date: string;
	category: { id: number; name: string };
	countries: { id: number; name: string }[];
	employer?: string;
	skills: { id: number; name: string }[];
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
		getJobId: build.query<JobsInterface, number>({
			query: (id: number) => ({
				url: `/jobs/get-job-by-id/?id=${id}`,
			}),
			providesTags: ["job"],
		}),
	}),
});

export const { useGetJobsQuery, useGetJobIdQuery } = getJobsApi;
