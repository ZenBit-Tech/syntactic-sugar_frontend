import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
import { ICreatedJob, INewJob } from "redux/interfaces";

export const newJobPostingApi = createApi({
	reducerPath: "newJobPostingApi",
	baseQuery: baseQuery,
	tagTypes: ["Job"],
	endpoints: build => ({
		createJob: build.mutation<ICreatedJob, INewJob>({
			query: body => ({
				url: "jobs/create-new-job",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useCreateJobMutation } = newJobPostingApi;
