import { Dashboard, FreelancerCardsList, StyledPage } from "@freelance/components";
import { ToastContainer } from "react-toastify";
import { useGetEmployerQuery } from "src/redux/createEmployer/employerApi";
import { useGetAllFreelancersQuery } from "src/redux/createFreelancer/freelancer-pageApi";
import { TALENTS_PAGE } from "src/utils/constants/breakpoint";

export function TalentsPage() {
	const { data: talents } = useGetAllFreelancersQuery();
	const { data: employerProfile } = useGetEmployerQuery();

	return (
		<StyledPage>
			<Dashboard userRole="employer" typePage={TALENTS_PAGE} profile={employerProfile}>
				<FreelancerCardsList data={talents}></FreelancerCardsList>
				<ToastContainer />
			</Dashboard>
		</StyledPage>
	);
}

export default TalentsPage;
