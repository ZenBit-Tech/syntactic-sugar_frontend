import { Container, Page, Area } from "./dashboard.styled";
import { DashboardHeader, DashboardMenu } from "@freelance/components";

export interface DashboardProps {
	children: React.ReactNode;
	userRole: "freelancer" | "guest" | "employer";
}

export function Dashboard({ children, userRole }: DashboardProps) {
	return (
		<Container>
			{userRole === "guest" && <DashboardMenu userRole="guest" />}
			<Area>
				<DashboardHeader userRole="guest" />
				<Page>{children}</Page>
			</Area>
		</Container>
	);
}

export default Dashboard;
