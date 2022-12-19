import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";

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
	baseQuery: baseQuery,
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
