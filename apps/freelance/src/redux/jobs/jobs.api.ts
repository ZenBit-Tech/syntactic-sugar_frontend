import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
import { ICreatedJob, INewJob, IUpdateJob } from "redux/interfaces";

export interface InstObject {
	id: string;
	name: string;
}

export interface Proposal {
	id: string;
	coverLetter: string;
}

export interface IEmployerResponse {
	id: string;
	fullName: string;
	companyName: string;
	position: string;
	phone: string;
	linkedIn: string;
	website: string;
	aboutUs: string;
	image: string;
}

export interface JobsInterface {
	id: string;
	description: string;
	position: string;
	countries: InstObject[];
	employmentType: string;
	hourRate: string;
	availableAmountOfHours: string;
	workExperience: string;
	englishLevel: string;
	proposals: Proposal[];
	category: InstObject;
	skills: InstObject[];
	createdDate: string;
	updatedDate: string;
	isPublished: boolean;
	isProposal: boolean;
	otherRequirenments: string;
	employer: IEmployerResponse;
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
		getJobId: build.query<JobsInterface, string>({
			query: (id: string) => ({
				url: `/jobs/get-job-by-id/${id}`,
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
		toggleIsPublishJob: build.mutation<void, string>({
			query: (id: string) => ({
				url: `jobs/publish-job/${id}`,
				method: "PATCH",
			}),
			invalidatesTags: ["Job"],
		}),
		removeJob: build.mutation<void, string>({
			query: (id: string) => ({
				url: `jobs/remove-job/${id}`,
				method: "DELETE",
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
		}),
		updateJobById: build.mutation({
			query: ({ id, ...body }: IUpdateJob) => ({
				url: `jobs/update-job/${id}`,
				method: "PUT",
				body,
			}),
			invalidatesTags: ["Job"],
		}),
	}),
});

export const {
	useGetJobsQuery,
	useRemoveJobMutation,
	useGetJobIdQuery,
	useGetJobsByEmployerQuery,
	useGetJobsWithProposalsQuery,
	useCreateJobMutation,
	useRemoveProposalByIdMutation, 
	useToggleIsPublishJobMutation,
	useUpdateJobByIdMutation,
} = getJobsApi;

