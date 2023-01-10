import { IChat } from "redux/chat/chatApi";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { educationProps, workHistoryProps } from "redux/createFreelancer/freelancer-slice";
import { IEmployerResponse, InstObject, JobsInterface, Proposal } from "redux/jobs";

export interface IInvitation {
	id: string;
	freelancer: IResponse;
}

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
	education?: educationProps[];
	workHistory?: workHistoryProps[];
	otherExperience?: string;
	image?: string;
	user?: { id: number; email: string };
	coverLetter?: string;
	filePath?: string;
	chats?: IChat[];
	freelancer?: {
		id?: string;
		fullName?: string;
		image?: string;
	};
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
