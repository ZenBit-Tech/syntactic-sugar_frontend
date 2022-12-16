import { useGetJobsQuery } from "redux/jobs/jobs.api";
import { EmployerJobsEmpty, EmployerJobsList } from "@freelance/components";
import { JobsContainer } from "./employer-jobs-container.styled";

export function EmployerJobsContainer() {
	const { data, isLoading } = useGetJobsQuery();
	console.log(data);

	return (
		<JobsContainer>{data?.length ? <EmployerJobsList /> : <EmployerJobsEmpty />}</JobsContainer>
	);
}

export default EmployerJobsContainer;
