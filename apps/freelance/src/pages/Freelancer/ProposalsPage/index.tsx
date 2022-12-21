import { Dashboard, Pagination, StyledPage } from "@freelance/components";
import { useGetJobByIdQuery, useGetJobsWithProposalsQuery } from "src/redux/jobs/jobs.api";

export function ProposalsPage() {
    
    const {data} = useGetJobsWithProposalsQuery();
    console.log(data)

    return (
        <StyledPage>
            <Dashboard userRole="freelancer" typePage="proposals">
                <Pagination itemsPerPage={5} user="freelancer" jobs={data} />
            </Dashboard>
            
        </StyledPage>
    )

}