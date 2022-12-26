import { useState } from "react";

interface IUseEmployerJobPageHook {
	isPublished: boolean;
	handleToggleStatusJob: () => void;
}

export const useEmployerJobPageHook = (): IUseEmployerJobPageHook => {
	const [isPublished, setIsPublished] = useState<boolean>(true);

	const handleToggleStatusJob = (): void => {
		console.log("Click");
		setIsPublished(!isPublished);
		console.log(isPublished);
	};

	return {
		isPublished,
		handleToggleStatusJob,
	};
};
