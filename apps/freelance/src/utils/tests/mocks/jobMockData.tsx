import { JobsInterface } from "redux/jobs/jobs.api";

export const mockJobData: JobsInterface = {
	id: "id",
	description: "We are looking for senior front-end developer",
	position: "Front-end developer",
	countries: [
		{ id: "uk", name: "Ukraine" },
		{ id: "us", name: "Unated States of America" },
	],
	employmentType: "Office work",
	hourRate: "Less than 500$",
	availableAmountOfHours: "Full time",
	workExperience: "2 years",
	englishLevel: "Beginner",
	proposals: [
		{
			id: "id",
			coverLetter: "My cover letter",
		},
	],
	category: {
		id: "id",
		name: "Retail",
	},
	skills: [
		{
			id: "1",
			name: "Java",
		},
		{
			id: "2",
			name: "Node.js",
		},
	],
	createdDate: "created date",
	updatedDate: "update date",
	isPublished: false,
	isProposal: false,
	otherRequirenments: "Oter requirenments",
	employer: {
		id: "2",
		fullName: "Ksenia Komisarova",
		companyName: "IT",
		position: "HR",
		phone: "04433992020",

		linkedIn: "linkedin.com",
		website: "www.mysite.com",

		aboutUs: "Description of a company",
		image: "url/image",
	},
};
