import { Container, Page, Area } from "./dashboard.styled";
import { DashboardHeader, DashboardMenu } from "@freelance/components";

export interface DashboardProps {
	children: React.ReactNode;
	userRole: "freelancer";
}

export function Dashboard({ children, userRole }: DashboardProps) {
	return (
		<Container>
			{userRole === "freelancer" && <DashboardMenu userRole="freelancer" />}
			<Area>
				<DashboardHeader />
				<Page>{children}</Page>
			</Area>
		</Container>
	);
}

export default Dashboard;
