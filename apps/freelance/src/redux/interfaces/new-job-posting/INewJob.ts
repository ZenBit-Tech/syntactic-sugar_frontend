export interface INewJob {
	title: string;
	description: string;
	countries: string[];
	category: string;
	position: string;
	employmentType: string;
	availableAmountOfHours: string;
	workExperience: string;
	hourRate: string;
	skills: (string | undefined)[];
	englishLevel: string | undefined;
	otherRequirenments: string;
}
