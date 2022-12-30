import { JobsInterface, useGetJobIdQuery } from "redux/jobs";

interface IUseEditJobHook {
	jobById?: JobsInterface;
	isLoading: boolean;
}

export const useEditJobHook = (jobId: string): IUseEditJobHook => {
	const { data: jobById, isLoading } = useGetJobIdQuery(jobId);

	return {
		jobById,
		isLoading,
	};
};
