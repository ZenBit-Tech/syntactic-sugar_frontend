import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";
import { RootState } from "redux/store";

interface IServerResponse {
	id: string;
	email: string;
}

interface IToken {
	token: string;
}

export const signupGoogleApi = createApi({
	reducerPath: "signupGoogleApi",
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
