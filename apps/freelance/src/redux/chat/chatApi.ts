import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { IEmployerResponse, JobsInterface } from "redux/jobs";
import { IOffer } from "redux/offer/offerApi";

export interface IMessage {
	id: string;
	text: string;
	sender: string;
	createdAt: string;
	updatedAt: string;
	chatId: string;
}

export interface IChat {
	id: string;
	createdAt: string;
	updatedAt: string;
	messages: IMessage[];
	freelancer: IResponse;
	employer: IEmployerResponse;
	job: JobsInterface;
}

export interface ICreateChat {
	freelancerId?: string;
	employerId?: string;
	jobId?: string;
}

export const chatApi = createApi({
	reducerPath: "chat",
	baseQuery: baseQuery,
	refetchOnFocus: true,
	tagTypes: ["chat"],
	endpoints: build => ({
		createChat: build.mutation<IChat, ICreateChat>({
			query: (body: ICreateChat) => ({
				url: "chat/create-chat",
				method: "POST",
				body,
			}),
			invalidatesTags: ["chat"],
		}),
		getChatsByUser: build.query<IChat[], void>({
			query: () => `/chat/get-chats-by-user`,
			providesTags: ["chat"],
		}),
		getChatMessages: build.query<IMessage[], string>({
			query: (id: string) => `/messages/messages/${id}`,
			providesTags: ["chat"],
		}),
	}),
});

export const { useCreateChatMutation, useGetChatsByUserQuery, useLazyGetChatMessagesQuery } =
	chatApi;
