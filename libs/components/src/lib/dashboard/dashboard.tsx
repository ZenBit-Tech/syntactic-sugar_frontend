import { DashboardHeader, DashboardMenu } from "@freelance/components";
import { ROLES } from "utils/constants/roles";
import { Container, Page, Area } from "./dashboard.styled";

export interface DashboardProps {
	children: React.ReactNode;
	userRole: "freelancer" | "employer";
  	typePage?: "createProfile" | "main" | "proposals";
}

export function Dashboard({ children, userRole, typePage }: DashboardProps) {
	return (
		<Container>
			{userRole === ROLES.FREELANCER && (
				<>
					<DashboardMenu userRole={userRole} typePage={typePage}/>
					<Area>
						<DashboardHeader userRole={userRole} typePage={typePage} />
						<Page>{children}</Page>
					</Area>
				</>
			)}
			{userRole === ROLES.EMPLOYER && (
				<>
					<DashboardMenu userRole={userRole} />
					<Area>
						<DashboardHeader userRole={userRole} typePage={typePage} />
						<Page>{children}</Page>
					</Area>
				</>
			)}
		</Container>
	);
}

export default Dashboard;
