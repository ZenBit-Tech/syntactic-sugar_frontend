import { DashboardHeader, DashboardMenu } from "@freelance/components";
import { ROLES } from "utils/constants/roles";
import { Container, Page, Area } from "./dashboard.styled";

export interface DashboardProps {
	children: React.ReactNode;
	userRole: "freelancer" | "employer";
}

export function Dashboard({ children, userRole }: DashboardProps) {
	return (
		<Container>
			{userRole === ROLES.FREELANCER && (
				<>
					<DashboardMenu userRole="freelancer" />
					<Area>
						<DashboardHeader userRole="freelancer" />
						<Page>{children}</Page>
					</Area>
				</>
			)}
			{userRole === ROLES.EMPLOYER && (
				<>
					<DashboardMenu userRole="employer" />
					<Area>
						<DashboardHeader userRole="employer" />
						<Page>{children}</Page>
					</Area>
				</>
			)}
		</Container>
	);
}

export default Dashboard;
