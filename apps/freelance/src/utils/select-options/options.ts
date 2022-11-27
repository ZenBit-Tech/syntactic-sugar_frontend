export type SelectOptions = {
	value: string;
	label: string;
};

export type SkillsType = Array<SelectOptions>;

export const countries: SelectOptions[] = [
	{
		label: "Andorra",
		value: "AD",
	},
	{
		label: "Albania",
		value: "AL",
	},
	{
		label: "Austria",
		value: "AT",
	},
	{
		label: "Åland Islands",
		value: "AX",
	},
	{
		label: "Bosnia and Herzegovina",
		value: "BA",
	},
	{
		label: "Belgium",
		value: "BE",
	},
	{
		label: "Bulgaria",
		value: "BG",
	},
	{
		label: "Belarus",
		value: "BY",
	},
	{
		label: "Switzerland",
		value: "CH",
	},
	{
		label: "Cyprus",
		value: "CY",
	},
	{
		label: "Czech Republic",
		value: "CZ",
	},
	{
		label: "Germany",
		value: "DE",
	},
	{
		label: "Denmark",
		value: "DK",
	},
	{
		label: "Estonia",
		value: "EE",
	},
	{
		label: "Spain",
		value: "ES",
	},
	{
		label: "Finland",
		value: "FI",
	},
	{
		label: "Faroe Islands",
		value: "FO",
	},
	{
		label: "France",
		value: "FR",
	},
	{
		label: "United Kingdom",
		value: "GB",
	},
	{
		label: "United States of America",
		value: "US",
	},
	{
		label: "Guernsey",
		value: "GG",
	},
	{
		label: "Greece",
		value: "GR",
	},
	{
		label: "Croatia",
		value: "HR",
	},
	{
		label: "Hungary",
		value: "HU",
	},
	{
		label: "Ireland",
		value: "IE",
	},
	{
		label: "Isle of Man",
		value: "IM",
	},
	{
		label: "Iceland",
		value: "IC",
	},
	{
		label: "Italy",
		value: "IT",
	},
	{
		label: "Jersey",
		value: "JE",
	},
	{
		label: "Liechtenstein",
		value: "LI",
	},
	{
		label: "Lithuania",
		value: "LT",
	},
	{
		label: "Luxembourg",
		value: "LU",
	},
	{
		label: "Latvia",
		value: "LV",
	},
	{
		label: "Monaco",
		value: "MC",
	},
	{
		label: "Moldova, Republic of",
		value: "MD",
	},
	{
		label: "Macedonia, The Former Yugoslav Republic of",
		value: "MK",
	},
	{
		label: "Malta",
		value: "MT",
	},
	{
		label: "Netherlands",
		value: "NL",
	},
	{
		label: "Norway",
		value: "NO",
	},
	{
		label: "Poland",
		value: "PL",
	},
	{
		label: "Portugal",
		value: "PT",
	},
	{
		label: "Romania",
		value: "RO",
	},
	{
		label: "Russian Federation",
		value: "RU",
	},
	{
		label: "Sweden",
		value: "SE",
	},
	{
		label: "Slovenia",
		value: "SI",
	},
	{
		label: "Svalbard and Jan Mayen",
		value: "SJ",
	},
	{
		label: "Slovakia",
		value: "SK",
	},
	{
		label: "San Marino",
		value: "SM",
	},
	{
		label: "Ukraine",
		value: "UA",
	},
	{
		label: "Holy See (Vatican City State)",
		value: "VA",
	},
];

export const categories: SelectOptions[] = [
	{
		label: "Service sector",
		value: "service",
	},
	{
		label: "Skilled trades & manufactoring",
		value: "skilled trades",
	},
	{
		label: "Sales & procurement",
		value: "sales",
	},
	{
		label: "Retail",
		value: "retail",
	},
	{
		label: "Hotels, restaurants & tourism",
		value: "hotels",
	},
	{
		label: "Administration & middle management",
		value: "administration",
	},
	{
		label: "IT, computers & Internet",
		value: "IT",
	},
	{
		label: "Logistics, warehouse & international commerce",
		value: "logistics",
	},
	{
		label: "Transportation & auto industry",
		value: "auto",
	},
	{
		label: "Medicine & pharmaceuticals",
		value: "medicine",
	},
	{
		label: "Marketing, advertising & PR",
		value: "marketing",
	},
	{
		label: "Accounting & auditing",
		value: "accounting",
	},
	{
		label: "Secretarial, clerical & administrative assistants",
		value: "secretarial",
	},
	{
		label: "Education & science",
		value: "education",
	},
	{
		label: "Telecommunications",
		value: "telecommunications",
	},
	{
		label: "Finance & banking",
		value: "finance",
	},
	{
		label: "Construction & architecture",
		value: "architecture",
	},
	{
		label: "Design & creativity",
		value: "design",
	},
	{
		label: "Beauty, fitness & sports",
		value: "sports",
	},
	{
		label: "Journalism, publishing & printing",
		value: "publishing",
	},
	{
		label: "HR & personnel management",
		value: "hr",
	},
	{
		label: "Upper & senior management",
		value: "management",
	},
	{
		label: "Agriculture & agribusiness",
		value: "agribusiness",
	},
	{
		label: "Security & guarding",
		value: "security",
	},
	{
		label: "Legal",
		value: "legal",
	},
	{
		label: "Real estate",
		value: "real estate",
	},
	{
		label: "Culture, music & entertainment",
		value: "culture",
	},
	{
		label: "Insurance",
		value: "insurance",
	},
];

export const englishLevel: SelectOptions[] = [
	{
		label: "No English",
		value: "noEnglish",
	},
	{
		label: "Beginner",
		value: "begginner",
	},
	{
		label: "Elementary",
		value: "elementary",
	},
	{
		label: "Pre-Intermediate",
		value: "preInt",
	},
	{
		label: "Intermediate",
		value: "intermediate",
	},
	{
		label: "Upper-Intermediate",
		value: "upperInt",
	},
	{
		label: "Advanced",
		value: "advanced",
	},
];

export const hoursAmount: SelectOptions[] = [
	{
		label: "Full time",
		value: "full",
	},
	{
		label: "Part time",
		value: "part",
	},
];

export const skills: SelectOptions[] = [
	{
		label: "JavaScript/Front-End",
		value: "js",
	},
	{
		label: "Java",
		value: "java",
	},
	{
		label: "C#",
		value: "c#",
	},
	{
		label: ".NET",
		value: ".net",
	},
	{
		label: "Python",
		value: "python",
	},
	{
		label: "PHP",
		value: "php",
	},
	{
		label: "Node.js",
		value: "node",
	},
	{
		label: "iOS",
		value: "ios",
	},
	{
		label: "Android",
		value: "android",
	},
	{
		label: "C",
		value: "c",
	},
	{
		label: "C++",
		value: "c++",
	},
	{
		label: "Embedded",
		value: "embedded",
	},
	{
		label: "Flutter",
		value: "flutter",
	},
	{
		label: "Golang",
		value: "golang",
	},
	{
		label: "Ruby",
		value: "ruby",
	},
	{
		label: "Scala",
		value: "scala",
	},
	{
		label: "Salesforce",
		value: "salesforce",
	},
	{
		label: "Rust",
		value: "rust",
	},
	{
		label: "Other",
		value: "other",
	},
];

export const hourRate: SelectOptions[] = [
	{
		label: "Less than 500$",
		value: "less 500",
	},
	{
		label: "From 500$ to 1000$",
		value: "500-1000",
	},
	{
		label: "From 1000$ to 1500$",
		value: "1000-1500",
	},
	{
		label: "From 1500$",
		value: "more 1500",
	},
	{
		label: "From 15000$",
		value: "more 15000",
	},
];

export const employmentType: SelectOptions[] = [
	{
		label: "Remote",
		value: "remote",
	},
	{
		label: "Office",
		value: "office",
	},
	{
		label: "Freelancer for project",
		value: "freelancer",
	},
	{
		label: "Move to another city",
		value: "city relocate",
	},
	{
		label: "Move to another country",
		value: "abroad relocate",
	},
];

export const workExperience: SelectOptions[] = [
	{
		label: "No experience",
		value: "no",
	},
	{
		label: "Less than 1 year",
		value: "less 1year",
	},
	{
		label: "1 year",
		value: "1",
	},
	{
		label: "2 years",
		value: "2",
	},
	{
		label: "3 years",
		value: "3",
	},
	{
		label: "4 years",
		value: "4",
	},
	{
		label: "5 years",
		value: "5",
	},
	{
		label: "more than 5 years",
		value: "more5",
	},
	{
		label: "more than 10 years",
		value: "more10",
	},
	{
		label: "more than 15 years",
		value: "more15",
	},
	{
		label: "more than 20 years",
		value: "more20",
	},
	{
		label: "more than 25 years",
		value: "more25",
	},
];
