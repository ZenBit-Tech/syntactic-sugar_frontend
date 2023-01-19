import { useState } from "react";

interface IUseInvitationFilter {
	invitations: boolean;
	allTalents: boolean;
	isFilterOpen: boolean;
	showInvitations: () => void;
	showAllTallents: () => void;
	toggleFilterBox: () => void;
}

export const useInvitationFilterHooks = (): IUseInvitationFilter => {
	const [invitations, setInvitations] = useState<boolean>(false);
	const [allTalents, setAllTallents] = useState<boolean>(true);
	const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

	const showInvitations = () => {
		setInvitations(true);
		setAllTallents(false);
		if (isFilterOpen) {
			toggleFilterBox();
		}
	};

	const showAllTallents = () => {
		setAllTallents(true);
		setInvitations(false);
	};

	const toggleFilterBox = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	return {
		invitations,
		allTalents,
		isFilterOpen,
		showInvitations,
		showAllTallents,
		toggleFilterBox,
	};
};
