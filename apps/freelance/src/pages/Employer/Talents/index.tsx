import { Dashboard, FreelancerCardsList, StyledPage } from "@freelance/components";
import { useGetAllFreelancersQuery } from "src/redux/createFreelancer/freelancer-pageApi";

export function TalentsPage() {
	const { data } = useGetAllFreelancersQuery();

	return (
		<StyledPage>
			<Dashboard userRole="employer" typePage="talents">
				<FreelancerCardsList data={data}></FreelancerCardsList>
			</Dashboard>
		</StyledPage>
	);
}

export default TalentsPage;
