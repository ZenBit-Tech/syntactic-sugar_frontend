import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "redux/base-query";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { JobsInterface } from "redux/jobs";
import { string } from "yup/lib/locale";

export interface IOffer {
	id: string;
	hourRate: string;
  isAccepted: boolean;
	freelancer: IResponse;
	job: JobsInterface;
	createdAt: string;
  acceptance: boolean;
}

export interface ICreateOffer {
	hourRate?: string;
	freelancerId?: string;
	jobId?: string;
}

export interface IUpdateOffer {
	id?: string;
	isAccepted: boolean;
	freelancerId?: string;
	chatId?: string;
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
		updateOffer: build.mutation<void, IUpdateOffer>({
			query: (body: IUpdateOffer) => ({
				url: "offer/update-offer",
				method: "POST",
				body,
			}),
			invalidatesTags: ["offer"],
		}),
	}),
});

export const { useCreateOfferMutation, useUpdateOfferMutation } = offerApi;
