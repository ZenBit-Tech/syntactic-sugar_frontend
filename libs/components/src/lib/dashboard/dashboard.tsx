import { DashboardHeader, DashboardMenu } from "@freelance/components";
import { Container, Page, Area } from "./dashboard.styled";

export interface DashboardProps {
	children: React.ReactNode;
	userRole: "freelancer" | "employer" | "guest";
}

export function Dashboard({ children, userRole }: DashboardProps) {
	return (
		<Container>
			{userRole === "freelancer" && (
				<>
					<DashboardMenu userRole="freelancer" />
					<Area>
						<DashboardHeader userRole="freelancer" />
						<Page>{children}</Page>
					</Area>
				</>
			)}
			{userRole === "employer" && (
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
