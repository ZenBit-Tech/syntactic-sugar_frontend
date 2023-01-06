import { FreelancerCard, JobCard, CommonObject } from "@freelance/components";
import { Container } from "./pagination.styled";

export interface CurrentItems {
	data?: CommonObject[];
	user: string;
	typePage?: "proposals" | "jobs" | "talents";
}

export function Items({ data, user, typePage }: CurrentItems) {
	return (
		<Container>
			{typePage === "talents"
				? data?.map(freelancer => {
						return (
							<FreelancerCard
								key={freelancer.id}
								id={freelancer.id}
								fullName={freelancer.fullName}
								position={freelancer.position}
								category={freelancer.category}
								skills={freelancer.skills}
								employmentType={freelancer.employmentType}
								country={freelancer.country}
								hourRate={freelancer.hourRate}
								availableAmountOfHours={freelancer.availableAmountOfHours}
								workExperience={freelancer.workExperience}
								englishLevel={freelancer.englishLevel}
								education={freelancer.education}
								workHistory={freelancer.workHistory}
								otherExperience={freelancer.otherExperience}
								createdDate={freelancer.createdDate}
								image={freelancer.image}
								user={freelancer.user}
							/>
						);
				  })
				: data?.map(job => {
						return (
							<JobCard
								key={job.id}
								jobId={job.id}
								hourRate={job.hourRate}
								employerImg={job.employer?.image}
								employerName={job.employer?.fullName}
								employerCompany={job.employer?.companyName}
								employerPosition={job.employer?.position}
								title={job.title}
								position={job.position}
								countries={job.countries}
								proposals={job.proposals}
								employmentType={job.employmentType}
								availableAmountOfHours={job.availableAmountOfHours}
								workExperience={job.workExperience}
								levelEnglish={job.englishLevel}
								skills={job.skills}
								createdDate={job.createdDate}
								updatedDate={job.updatedDate}
								userType={user}
								typePage={typePage}
								isPublished={job.isPublished}
							/>
						);
				  })}
		</Container>
	);
}
