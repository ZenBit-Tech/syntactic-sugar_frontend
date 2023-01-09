import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";

export interface IInvitationBody {
	job_id?: string;
	freelancer_id?: string;
}

export const invitationApi = createApi({
	reducerPath: "invitations",
	baseQuery: baseQuery,
	tagTypes: ["invitations"],
	endpoints: builder => ({
		sendInvitation: builder.mutation({
			query: (body: IInvitationBody) => ({
				url: "/invitation/send-invitation",
				method: "POST",
				body,
			}),
			invalidatesTags: ["invitations"],
		}),
	}),
});

export const { useSendInvitationMutation } = invitationApi;
