import {
	FreelancerCard,
	JobCard,
	ProposalCard,
	ICommonObject,
	TypePage,
} from "@freelance/components";
import { EMPLOYER_JOBS, JOBS_PAGE, PROPOSALS_LIST, TALENTS_PAGE } from "utils/constants/breakpoint";
import { Container } from "./pagination.styled";

export interface CurrentItems {
	data?: ICommonObject[];
	user: string;
	typePage?: TypePage;
}

export function Items({ data, user, typePage }: CurrentItems) {
	return (
		<Container>
			{typePage === TALENTS_PAGE &&
				data?.map(freelancer => {
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
				})}
			{(typePage === EMPLOYER_JOBS || typePage === JOBS_PAGE) &&
				data?.map(job => {
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
			{typePage === PROPOSALS_LIST &&
				data?.map(proposal => (
					<ProposalCard
						key={proposal.id}
						id={proposal.id}
						coverLetter={proposal.coverLetter}
						hourRate={proposal.hourRate}
						filePath={proposal.filePath}
						createdDate={proposal.createdDate}
						freelancer={proposal.freelancer}
					/>
				))}
		</Container>
	);
}
