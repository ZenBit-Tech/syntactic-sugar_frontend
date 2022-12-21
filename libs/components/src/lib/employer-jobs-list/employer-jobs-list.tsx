import { JobsInterface } from "redux/jobs";
import { Pagination } from "@freelance/components";

export interface EmployerJobsListProps {
	data: JobsInterface[] | undefined;
}

export function EmployerJobsList({ data }: EmployerJobsListProps) {
	return <Pagination itemsPerPage={5} user="employer" jobs={data} />;
}

export default EmployerJobsList;
