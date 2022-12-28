import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";

export interface SendEmail {
	email?: string;
}

export interface SendPassAndToken {
	token: string | undefined;
	password: string;
}

export const resetPasswordApi = createApi({
	reducerPath: "resetPasswordApi",
	baseQuery: baseQuery,
	endpoints: builder => ({
		sendLinkEmail: builder.mutation<boolean, SendEmail>({
			query: values => ({
				url: "auth/forgotpassword",
				method: "POST",
				body: values,
			}),
		}),
		resetPassword: builder.mutation<boolean, SendPassAndToken>({
			query: values => ({
				url: "auth/resetpassword",
				method: "POST",
				body: values,
			}),
		}),
	}),
});

export const { useSendLinkEmailMutation, useResetPasswordMutation } = resetPasswordApi;
