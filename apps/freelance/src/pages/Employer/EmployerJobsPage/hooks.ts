import { useState } from "react";

interface IUseEmployerJobPageHook {
	isPublished: boolean;
	handleToggleStatusJob: () => void;
}

export const useEmployerJobPageHook = (): IUseEmployerJobPageHook => {
	const [isPublished, setIsPublished] = useState<boolean>(true);

	const handleToggleStatusJob = (): void => {
		setIsPublished(!isPublished);
	};

	return {
		isPublished,
		handleToggleStatusJob,
	};
};
