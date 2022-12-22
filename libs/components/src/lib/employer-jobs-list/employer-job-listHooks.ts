import { useRemoveJobMutation } from "redux/jobs";

interface IUseEmployerJobList {
	isLoading: boolean;
	handleRemoveJob: (id: string) => void;
}

export const useEmployerJobList = (): IUseEmployerJobList => {
	const [removeJob, { isLoading }] = useRemoveJobMutation();

	const handleRemoveJob = async (id: string) => {
		await removeJob(id);
	};

	return {
		isLoading,
		handleRemoveJob,
	};
};
