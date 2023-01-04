import { JobsInterface } from "redux/jobs";
import { Pagination } from "@freelance/components";

export interface EmployerJobsListProps {
	data: JobsInterface[];
}

export function EmployerJobsList({ data }: EmployerJobsListProps) {
	return <Pagination itemsPerPage={5} user="employer" data={data} typePage="jobs" />;
}

export default EmployerJobsList;
