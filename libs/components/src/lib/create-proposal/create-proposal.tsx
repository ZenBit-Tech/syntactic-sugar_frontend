import { JobDetailsCard, SendProposal } from "@freelance/components";
import { useCreateProposal } from "./create-proposalHooks";
import { useState } from "react";

export interface CreateProposalonJobProps {
    id: string;
    onCancel?: () => void;
    goBack?: () => void;
    onBack: () => void;
    typePage?: 'proposals' | 'jobs';
    isProposal?: boolean;
}

export const CreateProposalonJob = ({id, onBack, onCancel, typePage, isProposal}: CreateProposalonJobProps) => {
    const { openCreateProposal, goBackToDetails, isCreateProposalActive } = useCreateProposal();
    const [inputText, setInputText] = useState<string>();
    
    const saveCoverLetter = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        const coverLetter = evt.target.value;
        setInputText(coverLetter);
    }

    return (
        <>
            {!isCreateProposalActive && (
                <JobDetailsCard
                    id={id} 
                    typePage={typePage}
                    openCreateProposal={openCreateProposal}
                    onBack={onBack}
                    isProposal={isProposal}
                />
            )}
            {isCreateProposalActive && (
                <SendProposal
                    id={id}
                    goBack={goBackToDetails}
                    onCancel={onCancel}
                    saveCoverLetter={saveCoverLetter}
                    inputText={inputText}
                />
            )}
        </>
    )  
}