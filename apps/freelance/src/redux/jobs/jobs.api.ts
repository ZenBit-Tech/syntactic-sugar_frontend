import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
import { ICreatedJob, INewJob } from "redux/interfaces";

export interface Country {
	id: string;
	name: string;
}

export interface Skills extends Country { }
export interface Proposals extends Country { }

export interface JobsInterface {
	id: string;
	position: string;
	countries: Country[];
	employmentType: string;
	availableAmountOfHours: string;
	workExperience: string;
	englishLevel: string;
	category: string;
	skills: string[];
	hourRate: string;
	createdDate: string;
	updatedDate: string;
	isPublished: boolean;
	isProposal: boolean;
	proposals: Proposals[];
}

export const getJobsApi = createApi({
	reducerPath: "jobs",
	baseQuery: baseQuery,
	tagTypes: ["Job"],
	refetchOnFocus: true,
	endpoints: build => ({
		getJobs: build.query<JobsInterface[], void>({
			query: () => ({
				url: "jobs/get-all-jobs",
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
		getJobsWithProposals: build.query<JobsInterface[], void>({
			query: () => ({
				url: `jobs/get-job-by-proposals`,
			}),
			providesTags: ["Job"],
		}),
		removeProposalById: build.mutation({
			query: (id: string) => ({
				url: `proposal/remove-proposal/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Job"],
		})
	}),
});

export const { useGetJobsQuery, useGetJobsByEmployerQuery, useCreateJobMutation, useGetJobsWithProposalsQuery, useRemoveProposalByIdMutation } = getJobsApi;

