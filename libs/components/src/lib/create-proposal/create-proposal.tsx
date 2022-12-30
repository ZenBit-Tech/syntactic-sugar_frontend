import JobDetailsCard from "../job-details-card/job-details-card";
import SendProposal from "../send-proposal/send-proposal";
import { useCreateProposal } from "./create-proposalHooks";
import { useState } from "react";

export interface CreateProposalonJobProps {
    id: string;
    onCancel?: () => void;
    goBack?: () => void;
    onBack: () => void;
    typePage?: 'proposals' | 'jobs';
}

export const CreateProposalonJob = ({id, onBack, onCancel, typePage}: CreateProposalonJobProps) => {
    const { openCreateProposal, goBackToDetails, isCreateProposalActive } = useCreateProposal();
    // const [inputText, setInputText] = useState();
    
    // const saveCoverLetter = (evt: any) => {
    //     // evt.preventDefault();
    //     const coverLetter = evt.target.value;
    //     setInputText(coverLetter);
    //     console.log(coverLetter)

    return (
        <>
            {!isCreateProposalActive && (
                <JobDetailsCard
                    id={id} 
                    typePage={typePage}
                    openCreateProposal={openCreateProposal}
                    onBack={onBack}
                />
            )}
            {isCreateProposalActive && (
                <SendProposal
                    id={id}
                    goBack={goBackToDetails}
                    onCancel={onCancel}
                />
            )}
        </>
    )
    
}