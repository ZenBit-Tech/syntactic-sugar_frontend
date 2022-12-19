import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";
import { IForm } from "./login.api";
import { IUserState } from "./interfaces/IUserData";

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
	tagTypes: ["user", "registration"],
	endpoints: builder => ({
		signUp: builder.mutation<IServerResponse, IToken>({
			query: (body: IToken) => ({
				url: `auth/google/signup`,
				method: "POST",
				body,
			}),
			invalidatesTags: ["user"],
		}),
		signUpByEmail: builder.mutation<IUserState, IForm>({
			query: (body: IForm) => ({
				url: "auth/register",
				method: "POST",
				body,
			}),
			invalidatesTags: ["registration"],
		}),
	}),
});

export const { useSignUpMutation, useSignUpByEmailMutation } = signupGoogleApi;
