import { JobCard } from "@freelance/components";
import { JobsInterface } from "redux/jobs";
import { Container } from "./pagination.styled";

export interface CurrentItems {
	currentItems: JobsInterface[] | undefined;
	user: string;
	typePage?: 'proposals' | 'jobs';
}

export function Items({ currentItems, user, typePage }: CurrentItems) {
	return (
		<Container>
			{currentItems &&
				currentItems.map(job => {
					return (
						<JobCard
							proposalId={job.proposals[0].id}
							key={job.id}
							position={job.position}
							countries={job.countries}
							employmentType={job.employmentType}
							availableAmountOfHours={job.availableAmountOfHours}
							workExperience={job.workExperience}
							levelEnglish={job.englishLevel}
							createdDate={job.createdDate}
							updatedDate={job.updatedDate}
							userType={user}
							typePage={typePage}
						/>
					);
				})}
		</Container>
	);
}
