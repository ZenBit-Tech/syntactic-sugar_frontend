import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";

export interface INotification {
	id: string;
	isNew: boolean;
	message: {
		sender: string;
		chat: {
			id: string;
		};
	};
}

export const notificationApi = createApi({
	reducerPath: "notification",
	baseQuery: baseQuery,
	refetchOnFocus: true,
	tagTypes: ["notification"],
	endpoints: build => ({
		getChatNotificationsByProfile: build.query<INotification[], void>({
			query: () => `/notification/get-notifications-by-profile`,
			providesTags: ["notification"],
		}),
	}),
});

export const { useGetChatNotificationsByProfileQuery } = notificationApi;
