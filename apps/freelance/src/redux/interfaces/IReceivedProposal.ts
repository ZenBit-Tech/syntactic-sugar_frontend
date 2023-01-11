import { IResponse } from "redux/createFreelancer/freelancer-pageApi";

export interface IReceivedProposal {
	id: string;
	coverLetter: string;
	hourRate: string;
	filePath: string;
	createdDate: string;
	freelancer: IResponse;
}
