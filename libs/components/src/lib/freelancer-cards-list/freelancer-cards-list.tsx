import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { Pagination } from "@freelance/components";

export interface FreelancerCardsListProps {
	data: IResponse[] | undefined;
}

export function FreelancerCardsList({ data }: FreelancerCardsListProps) {
	return <Pagination itemsPerPage={5} user="employer" data={data} typePage="talents" />;
}

export default FreelancerCardsList;
