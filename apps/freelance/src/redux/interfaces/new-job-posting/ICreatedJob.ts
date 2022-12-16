type returnedObject = {
	id: number;
	name: string;
};

export interface ICreatedJob {
	id: number;
	jobTitle: string;
	jobDescription: string;
	countries: returnedObject[];
	category: returnedObject;
	position: string;
	employmentType: string;
	availableAmountOfHour: string;
	workExperience: string;
	hourRate: string;
	skills: returnedObject[];
	englishLevel: string;
	otherRequirenments: string;
}
