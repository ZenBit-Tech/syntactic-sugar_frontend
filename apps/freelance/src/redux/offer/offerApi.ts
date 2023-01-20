import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { JobsInterface } from "redux/jobs";

export interface IOffer {
	id: string;
	hourRate: string;
	freelancer: IResponse;
	job: JobsInterface;
	createdAt: string;
}

export interface ICreateOffer {
	hourRate?: string;
	freelancerId?: string;
	jobId?: string;
}

export const offerApi = createApi({
	reducerPath: "offer",
	baseQuery: baseQuery,
	refetchOnFocus: true,
	tagTypes: ["offer"],
	endpoints: build => ({
		createOffer: build.mutation<IOffer, ICreateOffer>({
			query: (body: ICreateOffer) => ({
				url: "offer/create-offer",
				method: "POST",
				body,
			}),
			invalidatesTags: ["offer"],
		}),
	}),
});

export const { useCreateOfferMutation } = offerApi;
