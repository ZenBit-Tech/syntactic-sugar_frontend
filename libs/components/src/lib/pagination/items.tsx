import { JobCard } from "@freelance/components";
import { JobsInterface } from "redux/jobs";
import { Container } from "./pagination.styled";

export interface CurrentItems {
	currentItems: JobsInterface[] | undefined;
	user: string;
}

export function Items({ currentItems, user }: CurrentItems) {
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
							employmentType={job.employmentType}
							availableAmountOfHours={job.availableAmountOfHours}
							workExperience={job.workExperience}
							levelEnglish={job.englishLevel}
							createdDate={job.createdDate}
							updatedDate={job.updatedDate}
							userType={user}
							isPublished={job.isPublished}
						/>
					);
				})}
		</Container>
	);
}
