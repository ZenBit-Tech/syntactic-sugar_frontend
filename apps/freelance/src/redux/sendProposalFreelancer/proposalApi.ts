import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";
import { RootState } from "redux/store";
import { IProposal, IReceivedProposal } from "redux/interfaces";

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

export const { useGetProposalsByJobIdQuery } = proposalFreelancerApi;
