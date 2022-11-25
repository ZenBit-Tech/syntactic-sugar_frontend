const getFullName= (state: { profile: { fullName: any; }; }) => state.profile.fullName;
const getCategory= (state: { profile: { category: any; }; }) => state.profile.category;
const getExperience= (state: { profile: { workExperience: any; }; }) => state.profile.workExperience;
const getEnglishLevel = (state: { profile: { englishLevel: any; }; }) => state.profile.englishLevel;
const getAmontOfHours = (state: { profile: { availableAmountOfHour: any; }; }) => state.profile.availableAmountOfHour;
const getCountry= (state: { profile: { country: any; }; }) => state.profile.country;



const profileSelectors = {
  getFullName,
  getCategory,
  getExperience,
  getEnglishLevel,
  getAmontOfHours,
  getCountry,
};

export default profileSelectors;