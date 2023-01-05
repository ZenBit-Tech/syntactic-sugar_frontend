import { FreelancerCard, JobCard } from "@freelance/components";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { JobsInterface } from "redux/jobs";
import { Container } from "./pagination.styled";

export interface CurrentItems {
	// <<<<<<< HEAD
	// 	currentItems?: JobsInterface[];
	// =======
	jobs?: JobsInterface[];
	freelancers?: IResponse[];
	// >>>>>>> develop
	user: string;
	typePage?: "proposals" | "jobs" | "talents";
}

export function Items({ jobs, freelancers, user, typePage }: CurrentItems) {
	return (
		<Container>
			{/* <<<<<<< HEAD
			{currentItems &&
				currentItems.map(job => {
					return (
						<JobCard
							key={job.id}
							jobId={job.id}
							hourRate={job.hourRate}
							employerImg={job.employer.image}
							employerName={job.employer.fullName}
							employerCompany={job.employer.companyName}
							employerPosition={job.employer.position}
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
======= */}
			{typePage === "talents"
				? freelancers?.map(freelancer => {
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
				: jobs?.map(job => {
						return (
							<JobCard
								key={job.id}
								jobId={job.id}
								hourRate={job.hourRate}
								employerImg={job.employer.image}
								employerName={job.employer.fullName}
								employerCompany={job.employer.companyName}
								employerPosition={job.employer.position}
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
			{/* >>>>>>> develop */}
		</Container>
	);
}
