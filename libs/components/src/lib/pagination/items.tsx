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
							key={job.id}
							jobId={job.id}
							position={job.position}
							countries={job.countries}
							proposals={job.proposals}
              // chats={job.chats}
							employmentType={job.employmentType}
							availableAmountOfHours={job.availableAmountOfHours}
							workExperience={job.workExperience}
							levelEnglish={job.englishLevel}
							createdDate={job.createdDate}
							updatedDate={job.updatedDate}
							userType={user}
							typePage={typePage}
							isPublished={job.isPublished}
              employer={job.employer}
						/>
					);
				})}
		</Container>
	);
}
