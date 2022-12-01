import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";
import { RootState } from "./store";

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
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).user.token;
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}

			return headers;
		},
	}),
	refetchOnFocus: true,
	endpoints: build => ({
		login: build.mutation({
			query: (body: IForm) => ({
				url: "auth/loging",
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
