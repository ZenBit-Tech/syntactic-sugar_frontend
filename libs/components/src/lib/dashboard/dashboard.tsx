import { Container, Page, Area } from "./dashboard.styled";
import { DashboardHeader, DashboardMenu } from "@freelance/components";

export interface DashboardProps {
	children: React.ReactNode;
	userRole: "freelancer" | "employer";
	page?: "proposals" | "searchWork";
}

export function Dashboard({ children, userRole, page }: DashboardProps) {
	return (
		<Container>
			{userRole === "freelancer" ? (
				<DashboardMenu userRole="freelancer" page={page} />
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
