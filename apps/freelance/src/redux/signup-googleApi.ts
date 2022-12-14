import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";
import { IForm } from "./login.api";
import { IUserState } from "./interfaces/IUserData";

interface IToken {
	token: string;
}

interface IConfirm {
	id: string;
}

export const signupGoogleApi = createApi({
	reducerPath: "signupGoogleApi",
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
	tagTypes: ["user", "registration", "confirmation"],
	endpoints: builder => ({
		signUp: builder.mutation<IUserState, IToken>({
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
		confirmEmail: builder.mutation<void, IConfirm>({
			query: (body: IConfirm) => ({
				url: "auth/confirm",
				method: "POST",
				body,
			}),
			invalidatesTags: ["confirmation"],
		}),
	}),
});

export const { useSignUpMutation, useSignUpByEmailMutation, useConfirmEmailMutation } =
	signupGoogleApi;
