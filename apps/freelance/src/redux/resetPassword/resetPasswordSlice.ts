import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL: string = process.env["NX_HOST"] || "";

export interface SendEmail {
	email?: string;
}

export interface SendPassAndToken {
	token: string | undefined;
	password: string;
}

export const resetPasswordApi = createApi({
	reducerPath: "resetPasswordApi",
	baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}auth/` }),
	endpoints: builder => ({
		sendLinkEmail: builder.mutation<boolean, SendEmail>({
			query: values => ({
				url: "/forgotpassword",
				method: "POST",
				body: values,
			}),
		}),
		resetPassword: builder.mutation<boolean, SendPassAndToken>({
			query: values => ({
				url: `/resetpassword`,
				method: "POST",
				body: values,
			}),
		}),
	}),
});

export const { useSendLinkEmailMutation, useResetPasswordMutation } = resetPasswordApi;
