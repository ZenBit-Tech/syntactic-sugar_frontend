import { createApi } from "@reduxjs/toolkit/query/react";
import { workHistoryProps, educationProps } from "redux/createFreelancer/freelancer-slice";
import { baseQuery } from "redux/base-query";
import { InstObject, JobsInterface, Proposal } from "redux/jobs/jobs.api";
import { SelectOptions } from "src/utils/select-options/options";
import { IOffer } from "../offer/offerApi";

export interface IEduResponse {
	id: string;
	institute: string;
	occupation: string;
	period: string;
}

export interface IWorkHistoryResponse {
	id: string;
	company: string;
	workPosition: string;
	period?: string;
}

export interface IFormInput {
	fullName: string;
	category: string;
	position: string;
	skills: string[];
	employmentType: string;
	country: string;
	hourRate: string;
	availableAmountOfHours: string;
	workExperience: string;
	englishLevel: string;
	education: educationProps[];
	workHistory: workHistoryProps[];
	otherExperience: string;
	image: string;
}

export interface Published {
	isPublished: boolean;
}

export interface IInvitation {
	id: string;
	freelancer: IResponse;
	job_id?: SelectOptions;
	jobs?: JobsInterface[];
	job: { id: string };
}

export interface IResponse {
	id: string;
	fullName: string;
	category: InstObject;
	position: string;
	skills: InstObject[];
	employmentType: string;
	country: InstObject;
	hourRate: string;
	availableAmountOfHours: string;
	workExperience: string;
	englishLevel: string;
	education: IEduResponse[];
	workHistory: IWorkHistoryResponse[];
	otherExperience?: string;
	isPublished: boolean;
	createdDate: string;
	updatedDate: string;
	image?: string;
	proposals: Proposal[];
	user: { id: number; email: string };
	invitation: IInvitation[];
	offers: IOffer[];
}

export interface IInvitationBody {
	job_id?: string;
	freelancer_id?: string;
}

export const createFreelancerApi = createApi({
	reducerPath: "createFreelancer",
	baseQuery: baseQuery,
	refetchOnMountOrArgChange: true,
	tagTypes: ["freelancer", "published", "proposal", "freelancers"],
	endpoints: builder => ({
		createFreelancer: builder.mutation({
			query: (body: IFormInput) => ({
				url: "freelancer/create",
				method: "POST",
				body,
			}),
			invalidatesTags: ["freelancer"],
		}),
		updateFreelancerProfile: builder.mutation<void, IFormInput>({
			query: body => ({
				url: "freelancer/update-freelancer",
				method: "PUT",
				body,
			}),
			invalidatesTags: ["freelancer"],
		}),
		addPublished: builder.mutation({
			query: (body: Published) => ({
				url: "freelancer/create/published",
				method: "POST",
				body,
			}),
			invalidatesTags: ["published"],
		}),
		getFreelancer: builder.query<IResponse, void>({
			query: () => "/freelancer/profile",
			providesTags: ["freelancer"],
		}),
		getAllFreelancers: builder.query<IResponse[], void>({
			query: () => "/freelancer/get-all-profiles",
			providesTags: ["freelancers"],
		}),
		sendInvitation: builder.mutation({
			query: (body: IInvitationBody) => ({
				url: "/invitation/send-invitation",
				method: "POST",
				body,
			}),
			invalidatesTags: ["freelancers"],
		}),
		getFreelancerById: builder.query<IResponse, string>({
			query: (id: string) => `/freelancer/get-freelancer-by-id/${id}`,
			providesTags: ["freelancers"],
		}),
	}),
});

export const {
	useCreateFreelancerMutation,
	useUpdateFreelancerProfileMutation,
	useAddPublishedMutation,
	useGetFreelancerQuery,
	useGetAllFreelancersQuery,
	useSendInvitationMutation,
	useGetFreelancerByIdQuery,
} = createFreelancerApi;
