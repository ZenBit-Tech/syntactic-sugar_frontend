import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
import { IProposal, IReceivedProposal } from "redux/interfaces";

export const proposalFreelancerApi = createApi({
	reducerPath: "createFreelancerProposal",
	baseQuery: baseQuery,
	tagTypes: ["proposal"],
	endpoints: builder => ({
		getProposalsByJobId: builder.query<IReceivedProposal[], string>({
			query: (id: string) => ({
				url: `/proposal/get-proposals-by-job-id/${id}`,
			}),
			providesTags: ["proposal"],
		}),
		createProposal: builder.mutation({
			query: (body: IProposal) => ({
				url: "/proposal/create",
				method: "POST",
				body,
			}),
			invalidatesTags: ["proposal"],
		}),
	}),
});

export const { useCreateProposalMutation, useGetProposalsByJobIdQuery } = proposalFreelancerApi;
