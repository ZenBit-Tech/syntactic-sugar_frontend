import { IChat } from "redux/chat/chatApi";
import {
	IEduResponse,
	IInvitation,
	IResponse,
	IWorkHistoryResponse,
} from "redux/createFreelancer/freelancer-pageApi";
import { IEmployerResponse, InstObject, JobsInterface, Proposal } from "redux/jobs";
import { IOffer } from "redux/offer/offerApi";

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
	offers?: IOffer[];
}

export type TypePage =
	| "proposals"
	| "jobs"
	| "talents"
	| "searchWork"
	| "employerJobs"
	| "proposalsList";
