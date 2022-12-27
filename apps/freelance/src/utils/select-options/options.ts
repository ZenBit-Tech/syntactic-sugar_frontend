import { useTranslation } from "react-i18next";

export type SelectOptions = {
	value: string | undefined;
	label: string | undefined;
};

export type SkillsType = Array<SelectOptions>;

interface iOptions {
	countries: SelectOptions[];
	categories: SelectOptions[];
	englishLevel: SelectOptions[];
	hoursAmount: SelectOptions[];
	skills: SelectOptions[];
	hourRate: SelectOptions[];
	employmentType: SelectOptions[];
	workExperience: SelectOptions[];
}

export const useOptions = (): iOptions => {
	const { t } = useTranslation();

	const countries: SelectOptions[] = [
		{
			label: t("countries.germany"),
			value: "DE",
		},
		{
			label: t("countries.spain"),
			value: "ES",
		},
		{
			label: t("countries.france"),
			value: "FR",
		},
		{
			label: t("countries.uk"),
			value: "GB",
		},
		{
			label: t("countries.usa"),
			value: "US",
		},
		{
			label: t("countries.italy"),
			value: "IT",
		},
		{
			label: t("countries.lithuania"),
			value: "LT",
		},
		{
			label: t("countries.latvia"),
			value: "LV",
		},
		{
			label: t("countries.moldova"),
			value: "MD",
		},
		{
			label: t("countries.poland"),
			value: "PL",
		},
		{
			label: t("countries.romania"),
			value: "RO",
		},
		{
			label: t("countries.ukraine"),
			value: "UA",
		},
	];

	const categories: SelectOptions[] = [
		{
			label: t("categories.serviceSector"),
			value: "service",
		},
		{
			label: t("categories.skilledTradesManufac"),
			value: "skilled trades",
		},
		{
			label: t("categories.salesProcur"),
			value: "sales",
		},
		{
			label: t("categories.retail"),
			value: "retail",
		},
		{
			label: t("categories.hotelRestTourism"),
			value: "hotels",
		},
		{
			label: t("categories.adminMiddleManag"),
			value: "administration",
		},
		{
			label: t("categories.itCompInt"),
			value: "IT",
		},
		{
			label: t("categories.logWarehIntComm"),
			value: "logistics",
		},
		{
			label: t("categories.transportAutoInd"),
			value: "auto",
		},
		{
			label: t("categories.medPharm"),
			value: "medicine",
		},
		{
			label: t("categories.marketAdvPr"),
			value: "marketing",
		},
		{
			label: t("categories.accAudit"),
			value: "accounting",
		},
		{
			label: t("categories.secrClerAdmAssist"),
			value: "secretarial",
		},
		{
			label: t("categories.educationScience"),
			value: "education",
		},
		{
			label: t("categories.telecom"),
			value: "telecommunications",
		},
		{
			label: t("categories.finBank"),
			value: "finance",
		},
		{
			label: t("categories.constractArchitect"),
			value: "architecture",
		},
		{
			label: t("categories.desCreativity"),
			value: "design",
		},
		{
			label: t("categories.beautyFitSport"),
			value: "sports",
		},
		{
			label: t("categories.journPublishPrint"),
			value: "publishing",
		},
		{
			label: t("categories.hrPersonManag"),
			value: "hr",
		},
		{
			label: t("categories.upperSenManag"),
			value: "management",
		},
		{
			label: t("categories.agribusiness"),
			value: "agribusiness",
		},
		{
			label: t("categories.securGuard"),
			value: "security",
		},
		{
			label: t("categories.legal"),
			value: "legal",
		},
		{
			label: t("categories.realEstate"),
			value: "real estate",
		},
		{
			label: t("categories.cultMusicEnt"),
			value: "culture",
		},
		{
			label: t("categories.insurance"),
			value: "insurance",
		},
	];

	const englishLevel: SelectOptions[] = [
		{
			label: t("englishLevel.noEnglish"),
			value: "noEnglish",
		},
		{
			label: t("englishLevel.beginner"),
			value: "begginner",
		},
		{
			label: t("englishLevel.elementary"),
			value: "elementary",
		},
		{
			label: t("englishLevel.preInterm"),
			value: "preInt",
		},
		{
			label: t("englishLevel.intermediate"),
			value: "intermediate",
		},
		{
			label: t("englishLevel.upperInterm"),
			value: "upperInt",
		},
		{
			label: t("englishLevel.advanced"),
			value: "advanced",
		},
		{
			label: t("englishLevel.master"),
			value: "master",
		},
	];

	const hoursAmount: SelectOptions[] = [
		{
			label: t("hoursAmount.full"),
			value: "full",
		},
		{
			label: t("hoursAmount.part"),
			value: "part",
		},
	];

	const skills: SelectOptions[] = [
		{
			label: t("skills.jsFe"),
			value: "js",
		},
		{
			label: t("skills.java"),
			value: "java",
		},
		{
			label: t("skills.cSharp"),
			value: "c#",
		},
		{
			label: t("skills.net"),
			value: ".net",
		},
		{
			label: t("skills.python"),
			value: "python",
		},
		{
			label: t("skills.php"),
			value: "php",
		},
		{
			label: t("skills.nodejs"),
			value: "node",
		},
		{
			label: t("skills.ios"),
			value: "ios",
		},
		{
			label: t("skills.android"),
			value: "android",
		},
		{
			label: t("skills.c"),
			value: "c",
		},
		{
			label: t("skills.cPlus"),
			value: "c++",
		},
		{
			label: t("skills.embedded"),
			value: "embedded",
		},
		{
			label: t("skills.flutter"),
			value: "flutter",
		},
		{
			label: t("skills.golang"),
			value: "golang",
		},
		{
			label: t("skills.ruby"),
			value: "ruby",
		},
		{
			label: t("skills.scala"),
			value: "scala",
		},
		{
			label: t("skills.salesforce"),
			value: "salesforce",
		},
		{
			label: t("skills.rust"),
			value: "rust",
		},
		{
			label: t("skills.other"),
			value: "other",
		},
	];

	const hourRate: SelectOptions[] = [
		{
			label: t("hourRate.lessThan500"),
			value: "less 500",
		},
		{
			label: t("hourRate.from500To1000"),
			value: "500-1000",
		},
		{
			label: t("hourRate.from1000To1500"),
			value: "1000-1500",
		},
		{
			label: t("hourRate.from1500"),
			value: "more 1500",
		},
		{
			label: t("hourRate.from15000"),
			value: "more 15000",
		},
	];

	const employmentType: SelectOptions[] = [
		{
			label: t("employmentType.remote"),
			value: "remote",
		},
		{
			label: t("employmentType.office"),
			value: "office",
		},
		{
			label: t("employmentType.forProject"),
			value: "freelancer",
		},
		{
			label: t("employmentType.moveToAnotherCity"),
			value: "city relocate",
		},
		{
			label: t("employmentType.moveToAnotherCountry"),
			value: "abroad relocate",
		},
	];

	const workExperience: SelectOptions[] = [
		{
			label: t("workExperience.noExp"),
			value: "no",
		},
		{
			label: t("workExperience.lessThanYear"),
			value: "less 1year",
		},
		{
			label: t("workExperience.oneYear"),
			value: "1",
		},
		{
			label: t("workExperience.twoYears"),
			value: "2",
		},
		{
			label: t("workExperience.threeYears"),
			value: "3",
		},
		{
			label: t("workExperience.fourYears"),
			value: "4",
		},
		{
			label: t("workExperience.fiveYears"),
			value: "5",
		},
		{
			label: t("workExperience.moreThanFiveYears"),
			value: "more5",
		},
		{
			label: t("workExperience.moreThanTenYears"),
			value: "more10",
		},
		{
			label: t("workExperience.moreThanFifteenYears"),
			value: "more15",
		},
		{
			label: t("workExperience.moreThanTwentyYears"),
			value: "more20",
		},
		{
			label: t("workExperience.moreThanTwentyFiveYears"),
			value: "more25",
		},
	];

	return {
		countries,
		categories,
		englishLevel,
		hoursAmount,
		skills,
		hourRate,
		employmentType,
		workExperience,
	};
};
