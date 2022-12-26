import { Skeleton } from "antd";

interface SkeletonEmployerJobsProps {
	isLoading: boolean;
}

export const SkeletonEmployerJobs = ({ isLoading }: SkeletonEmployerJobsProps) => {
	return (
		<>
			<Skeleton loading={isLoading} active={isLoading} paragraph={{ rows: 8 }} />
			<Skeleton.Button active={isLoading} size="small" block={isLoading} />
		</>
	);
};
