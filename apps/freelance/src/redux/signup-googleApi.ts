import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";

interface IServerResponse {
	id: string;
	email: string;
}

interface IToken {
	token: string;
}

export const signupGoogleApi = createApi({
	reducerPath: "signupGoogleApi",
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
	tagTypes: ["user"],
	endpoints: builder => ({
		signUp: builder.mutation<IServerResponse, IToken>({
			query: (body: IToken) => ({
				url: `auth/google/signup`,
				method: "POST",
				body,
			}),
			invalidatesTags: ["user"],
		}),
	}),
});

export const { useSignUpMutation } = signupGoogleApi;
