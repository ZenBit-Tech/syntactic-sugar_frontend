import { DashboardHeader, DashboardMenu } from "@freelance/components";
import { ROLES } from "utils/constants/roles";
import { Container, Page, Area } from "./dashboard.styled";

export interface DashboardProps {
	children: React.ReactNode;
	userRole: "freelancer" | "employer";
  typePage?: "createProfile" | "main";
}

export function Dashboard({ children, userRole, typePage }: DashboardProps) {
	return (
		<Container>
			{userRole === ROLES.FREELANCER && (
				<>
					<DashboardMenu userRole={userRole} />
					<Area>
						<DashboardHeader userRole={userRole} typePage={typePage} />
						<Page>{children}</Page>
					</Area>
				</>
			)}
			{userRole === ROLES.EMPLOYER && (
				<>
					<DashboardMenu userRole="employer" />
					<Area>
						<DashboardHeader userRole="employer" typePage={typePage} />
						<Page>{children}</Page>
					</Area>
				</>
			)}
		</Container>
	);
}

export default Dashboard;
