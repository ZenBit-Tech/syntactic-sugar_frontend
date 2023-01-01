import { useState } from "react";

interface IuseCreateProposal {
    openCreateProposal: () => void;
    goBackToDetails: () => void;
    isCreateProposalActive: boolean;
}

export const useCreateProposal = (): IuseCreateProposal => {
    const [isCreateProposalActive, setIsCreateProposalActive] = useState<boolean>(false);

    const openCreateProposal = (): void => {
		setIsCreateProposalActive(true);
	}

    const goBackToDetails = (): void => {
		setIsCreateProposalActive(false);
    }
    
    return {
        openCreateProposal,
        goBackToDetails,
        isCreateProposalActive,
    }
}