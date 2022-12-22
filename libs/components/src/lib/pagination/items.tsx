import { JobCard } from "@freelance/components";
import { JobsInterface } from "redux/jobs";
import { Container } from "./pagination.styled";

export interface CurrentItems {
	currentItems: JobsInterface[] | undefined;
	user: string;
	handleRemoveJob?: (id: string) => void;
}

export function Items({ currentItems, user, handleRemoveJob }: CurrentItems) {
	return (
		<Container>
			{currentItems &&
				currentItems.map(job => {
					return (
						<JobCard
							id={job.id}
							key={job.id}
							jobId={job.id}
							position={job.position}
							countries={job.countries}
							employmentType={job.employmentType}
							availableAmountOfHours={job.availableAmountOfHours}
							workExperience={job.workExperience}
							levelEnglish={job.englishLevel}
							createdDate={job.createdDate}
							updatedDate={job.updatedDate}
							userType={user}
							handleRemoveJob={handleRemoveJob}
						/>
					);
				})}
		</Container>
	);
}
