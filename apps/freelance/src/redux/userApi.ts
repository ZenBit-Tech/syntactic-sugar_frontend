import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
import { IResponse } from "./createFreelancer/freelancer-pageApi";
import { IEmployerResponse } from "./jobs";

export interface IResponseUser {
	id: string;
	freelancer: IResponse;
	emploeyr: IEmployerResponse;
}

export const userApi = createApi({
	reducerPath: "users",
	baseQuery: baseQuery,
	tagTypes: ["users"],
	refetchOnMountOrArgChange: true,
	endpoints: builder => ({
		getCurrentUser: builder.query<IResponseUser, void>({
			query: () => ({
				url: `/users/current-user`,
			}),
			providesTags: ["users"],
		}),
	}),
});

export const { useGetCurrentUserQuery } = userApi;
