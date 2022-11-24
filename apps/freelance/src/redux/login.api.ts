import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";

interface IForm {
	email: string;
	password: string;
}

interface IServerResponse {
	id: string;
	email: string;
	isActivated: boolean;
}

interface IToken {
	token: string;
}

export const loginApi = createApi({
	reducerPath: "auth/api",
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
	}),
	refetchOnFocus: true,
	endpoints: build => ({
		login: build.mutation({
			query: (body: IForm) => ({
				url: "auth/login",
				method: "POST",
				body,
			}),
		}),
		loginWithGoogle: build.mutation<IServerResponse, IToken>({
			query: (body: IToken) => ({
				url: "auth/google/login",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useLoginMutation, useLoginWithGoogleMutation } = loginApi;
