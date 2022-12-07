import { JobCard } from "@freelance/components";
import { userInfo } from "os";
import { jobs } from "utils/jobs/jobs";


export interface JobsInterface {
	position: string;
	location: string;
	employmentType: string;
	availableAmountOfHours: string;
	workExperience: string;
	levelEnglish: string;
	date: string;
	isPublished: boolean;
	isProposal: boolean;
}
export interface CurrentItems {
	currentItems: JobsInterface[];
  user: string;
}

export function Items({ currentItems, user }: CurrentItems) {
	return (
		<>
			{currentItems &&
				currentItems.map(job => {
					return (
						<div className="jobsCardContainer">
							<JobCard
								position={job.position}
								location={job.location}
								employmentType={job.employmentType}
								availableAmountOfHours={job.availableAmountOfHours}
								workExperience={job.workExperience}
								levelEnglish={job.levelEnglish}
								date={job.date}
								userType={user}
								jobActive={job.isProposal}
							/>
						</div>
					);
				})}
		</>
	);
}
