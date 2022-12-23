import { JobsInterface } from "redux/jobs";
import { Pagination } from "@freelance/components";
import { JOBS_PAGE } from "utils/constants/breakpoint";

export interface EmployerJobsListProps {
	data: JobsInterface[] | undefined;
	typePage: "proposals" | "jobs";
}

export function EmployerJobsList({ data }: EmployerJobsListProps) {
	return <Pagination itemsPerPage={5} user="employer" jobs={data} typePage={JOBS_PAGE} />;
}

export default EmployerJobsList;
