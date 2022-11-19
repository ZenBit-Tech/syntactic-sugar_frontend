import { Container, Page, Area } from "./dashboard.styled";
import { DashboardHeader, DashboardMenu } from "@freelance/components";

export interface DashboardProps {
	children: React.ReactNode;
	role: "freelancer";
}

export function Dashboard({ children, role }: DashboardProps) {
	return (
		<Container>
			{role === "freelancer" && <DashboardMenu role="freelancer" />}
			<Area>
				<DashboardHeader />
				<Page>{children}</Page>
			</Area>
		</Container>
	);
}

export default Dashboard;
