import { Dashboard, FreelancerCardsList, StyledPage } from "@freelance/components";
import { useGetEmployerQuery } from "src/redux/createEmployer/employerApi";
import { useGetAllFreelancersQuery } from "src/redux/createFreelancer/freelancer-pageApi";

export function TalentsPage() {
	const { data } = useGetAllFreelancersQuery();
	const { data: employerProfile } = useGetEmployerQuery();

	return (
		<StyledPage>
			<Dashboard userRole="employer" typePage="talents" profile={employerProfile}>
				<FreelancerCardsList data={data}></FreelancerCardsList>
			</Dashboard>
		</StyledPage>
	);
}

export default TalentsPage;
