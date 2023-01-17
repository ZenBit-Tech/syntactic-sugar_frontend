import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { Pagination } from "@freelance/components";
import { TALENTS_PAGE } from "utils/constants/breakpoint";

export interface FreelancerCardsListProps {
	data: IResponse[] | undefined;
}

export function FreelancerCardsList({ data }: FreelancerCardsListProps) {
	return <Pagination itemsPerPage={5} user="employer" data={data} typePage={TALENTS_PAGE} />;
}

export default FreelancerCardsList;
