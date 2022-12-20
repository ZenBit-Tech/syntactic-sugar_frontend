import { Dashboard, Pagination, StyledPage } from "@freelance/components";
import { useGetJobByIdQuery } from "src/redux/jobs/jobs.api";
import { Items } from "../../../../../../libs/components/src/lib/pagination/items";

export function ProposalsPage() {
    const user = 'freelancer';
    // const [job, {isLoading}] = useGetJobByIdQuery();

    return (
        <StyledPage>
            <Dashboard
                userRole="freelancer" page="proposals" >
                <p>Proposals Page</p>
                {/* <Pagination itemsPerPage={5} user={user} jobs={[]}>
                    <Items currentItems={[]} user={""} />
                </Pagination> */}
            </Dashboard >
        </StyledPage>
    )

}