import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
import { ICreatedJob, INewJob } from "redux/interfaces";

export interface Country {
	id: string;
	name: string;
}

export interface Skills extends Country {}

export interface JobsInterface {
	id: string;
	position: string;
	countries: Country[];
	employmentType: string;
	hourRate: string;
	availableAmountOfHours: string;
	workExperience: string;
	englishLevel: string;
	category: string;
	skills: string[];
	createdDate: string;
	updatedDate: string;
	isPublished: boolean;
	isProposal: boolean;
}

export const getJobsApi = createApi({
	reducerPath: "jobs",
	baseQuery: baseQuery,
	refetchOnFocus: true,
	tagTypes: ["Jobs", "Job"],
	endpoints: build => ({
		getJobs: build.query<JobsInterface[], void>({
			query: () => ({
				url: "jobs/get-all-jobs",
			}),
			providesTags: ["Jobs"],
		}),
		getJobId: build.query<JobsInterface, number>({
			query: (id: number) => ({
				url: `/jobs/get-job-by-id/?id=${id}`,
			}),
			providesTags: ["Job"],
		}),
		getJobsByEmployer: build.query<JobsInterface[], void>({
			query: () => ({
				url: "jobs/get-jobs-by-employer",
			}),
			providesTags: ["Job"],
		}),
		createJob: build.mutation<ICreatedJob, INewJob>({
			query: body => ({
				url: "jobs/create-new-job",
				method: "POST",
				body,
			}),
			invalidatesTags: ["Job"],
		}),
	}),
});

export const {
	useGetJobsQuery,
	useGetJobIdQuery,
	useGetJobsByEmployerQuery,
	useCreateJobMutation,
} = getJobsApi;
