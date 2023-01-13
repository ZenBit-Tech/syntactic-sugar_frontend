import { IChat } from "redux/chat/chatApi";
import {
	IEduResponse,
	IResponse,
	IWorkHistoryResponse,
} from "redux/createFreelancer/freelancer-pageApi";
import { IEmployerResponse, InstObject, JobsInterface, Proposal } from "redux/jobs";
import { IInvitation } from "@freelance/components";

export interface ICommonObject {
	id: string;
	title?: string;
	description?: string;
	position?: string;
	countries?: InstObject[];
	country?: InstObject;
	employmentType?: string;
	hourRate?: string;
	availableAmountOfHours?: string;
	workExperience?: string;
	englishLevel?: string;
	proposals?: Proposal[];
	category?: InstObject;
	skills?: InstObject[];
	createdDate?: string;
	updatedDate?: string;
	isPublished?: boolean;
	isProposal?: boolean;
	otherRequirenments?: string;
	employer?: IEmployerResponse;
	fullName?: string;
	education?: IEduResponse[];
	workHistory?: IWorkHistoryResponse[];
	otherExperience?: string;
	image?: string;
	user?: { id: number; email: string };
	coverLetter?: string;
	filePath?: string;
	chats?: IChat[];
	freelancer?: IResponse;
	invitation?: IInvitation[];
	job?: JobsInterface;
}

export type TypePage =
	| "proposals"
	| "jobs"
	| "talents"
	| "searchWork"
	| "employerJobs"
	| "proposalsList";
