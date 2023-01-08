export interface IReceivedProposal {
	id: string;
	coverLetter: string;
	hourRate: string;
	filePath: string;
	createdDate: string;
	freelancer: {
		id: string;
		fullName: string;
		image: string;
	};
}
