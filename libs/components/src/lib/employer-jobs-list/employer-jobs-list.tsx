import { JobsInterface } from "redux/jobs";
import { Pagination } from "@freelance/components";
import { useEmployerJobList } from "./employer-job-listHooks";

export interface EmployerJobsListProps {
	data: JobsInterface[] | undefined;
}

export function EmployerJobsList({ data }: EmployerJobsListProps) {
	const { handleRemoveJob } = useEmployerJobList();

	return (
		<Pagination itemsPerPage={5} user="employer" jobs={data} handleRemoveJob={handleRemoveJob} />
	);
}

export default EmployerJobsList;
