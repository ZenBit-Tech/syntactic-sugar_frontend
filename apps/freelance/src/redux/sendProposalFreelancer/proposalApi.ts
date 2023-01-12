import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";
import { RootState } from "redux/store";
import { IReceivedProposal, IProposalDetails } from "redux/interfaces";

export const proposalFreelancerApi = createApi({
	reducerPath: "createFreelancerProposal",
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).user.token;
			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}

			return headers;
		},
	}),
	tagTypes: ["proposal"],
	endpoints: builder => ({
		getProposalsByJobId: builder.query<IReceivedProposal[], string>({
			query: (id: string) => ({
				url: `/proposal/get-proposals-by-job-id/${id}`,
			}),
			providesTags: ["proposal"],
		}),
		getProposalById: builder.query<IProposalDetails, string>({
			query: (id: string) => ({
				url: `/proposal/get-proposal-by-id/${id}`,
			}),
			providesTags: ["proposal"],
		}),
		createProposal: builder.mutation({
			query: (body: FormData) => ({
				url: "/proposal/create",
				method: "POST",
				body,
			}),
			invalidatesTags: ["proposal"],
		}),
	}),
});

export const { useCreateProposalMutation, useGetProposalsByJobIdQuery, useGetProposalByIdQuery } =
	proposalFreelancerApi;
