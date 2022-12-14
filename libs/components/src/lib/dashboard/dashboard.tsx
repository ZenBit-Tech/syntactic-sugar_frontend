import { Container, Page, Area } from "./dashboard.styled";
import { DashboardHeader, DashboardMenu } from "@freelance/components";

export interface DashboardProps {
	children: React.ReactNode;
	userRole: "freelancer" | "employer" | "guest";
}

export function Dashboard({ children, userRole }: DashboardProps) {
	return (
		<Container>
			{userRole === "freelancer" ? (
				<DashboardMenu userRole="freelancer" />
			) : (
				<DashboardMenu userRole="employer" />
			)}

			<Area>
				<DashboardHeader />
				<Page>{children}</Page>
			</Area>
		</Container>
	);
}

export default Dashboard;
