import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";
import { IProposal } from "redux/interfaces/IProposal";
import { RootState } from "redux/store";

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

export const { useCreateProposalMutation } = proposalFreelancerApi;
