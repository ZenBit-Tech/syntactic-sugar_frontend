import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "utils/constants/redux-query";
import { RootState } from "./store";

export enum UserRoles {
	EMPLOYER = "EMPLOYER",
	FREELANCER = "FREELANCER",
	GUEST = "GUEST",
}

interface IRole {
	role: UserRoles;
}

export const roleApi = createApi({
	reducerPath: "auth/role",
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
		addRole: build.mutation({
			query: (body: IRole) => ({
				url: "auth/role",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useAddRoleMutation } = roleApi;
