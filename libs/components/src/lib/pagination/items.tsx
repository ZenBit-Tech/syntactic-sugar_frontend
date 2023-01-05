import { JobCard } from "@freelance/components";
import { JobsInterface } from "redux/jobs";
import { Container } from "./pagination.styled";

export interface CurrentItems {
	currentItems?: JobsInterface[];
	user: string;
	typePage?: "proposals" | "jobs";
}

export function Items({ currentItems, user, typePage }: CurrentItems) {
	return (
		<Container>
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
		</Container>
	);
}
