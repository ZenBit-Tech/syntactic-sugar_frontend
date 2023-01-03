import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base-query";
import { IUserState } from "./interfaces/IUserData";
import { Token } from "./interfaces/Token";

export interface IForm {
	email: string;
	password: string;
}

interface IToken {
	token: Token;
}

export const loginApi = createApi({
	reducerPath: "auth/api",
	baseQuery: baseQuery,
	refetchOnFocus: true,
	endpoints: build => ({
		login: build.mutation<IUserState, IForm>({
			query: (body: IForm) => ({
				url: "auth/login",
				method: "POST",
				body,
			}),
		}),
		loginWithGoogle: build.mutation<IUserState, IToken>({
			query: (body: IToken) => ({
				url: "auth/google/login",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useLoginMutation, useLoginWithGoogleMutation } = loginApi;
