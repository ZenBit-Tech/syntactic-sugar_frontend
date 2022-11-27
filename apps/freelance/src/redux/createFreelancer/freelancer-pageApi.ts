import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";

// interface IServerResponse {
//   id: string;
//   email: string;
// }

// interface IToken {
//   token: string;
// }

export const createFreelancerApi = createApi({
	reducerPath: "createFreelancer",
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
	tagTypes: ["freelancer"],
	endpoints: builder => ({
		createFreelancer: builder.mutation({
			query: body => ({
				url: "freelancer/freelancer/create",
				method: "POST",
				body,
			}),
			invalidatesTags: ["freelancer"],
		}),
	}),
});

export const { useCreateFreelancerMutation } = createFreelancerApi;
