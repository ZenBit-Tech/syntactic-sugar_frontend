import { Dashboard, FreelancerCardsList, StyledPage } from "@freelance/components";
import { Wrapper } from "@pages/WorkDetails/styles";
import { useGetAllFreelancersQuery } from "src/redux/createFreelancer/freelancer-pageApi";

export function TalentsPage() {
	const { data } = useGetAllFreelancersQuery();
	console.log(data);
	return (
		<StyledPage>
			<Dashboard userRole="employer" typePage="talents">
				<Wrapper>
					<FreelancerCardsList data={data}></FreelancerCardsList>
				</Wrapper>
			</Dashboard>
		</StyledPage>
	);
}

export default TalentsPage;
