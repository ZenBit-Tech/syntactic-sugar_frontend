import { Dashboard, Pagination, StyledPage } from "@freelance/components";
import {  useGetJobsWithProposalsQuery } from "src/redux/jobs/jobs.api";
import { Wrapper } from './style';
import { PROPOSALS_PAGE } from "utils/constants/breakpoint";


export function ProposalsPage() {
    
    const {data} = useGetJobsWithProposalsQuery();
    console.log(data)

    return (
        <StyledPage>
            <Dashboard userRole="freelancer" typePage={PROPOSALS_PAGE}>
                <Wrapper>
                    <Pagination itemsPerPage={5} user="freelancer" jobs={data} />
                </Wrapper>
            </Dashboard>
        </StyledPage>
    )
}