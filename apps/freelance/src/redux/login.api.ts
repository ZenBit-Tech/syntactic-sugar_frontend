import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";
import { IUserState } from "./interfaces/IUserData";
import { Token } from "./interfaces/Token";
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
	token: Token;
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
		login: build.mutation<IUserState, IForm>({
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
