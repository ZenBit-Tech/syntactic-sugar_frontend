import { DashboardHeader, DashboardMenu } from "@freelance/components";
import { Container, Page, Area } from "./dashboard.styled";

export interface DashboardProps {
	children: React.ReactNode;
	userRole: "freelancer" | "employer";
	typePage?: "createProfile" | "main";
}

export function Dashboard({ children, userRole, typePage }: DashboardProps) {
	return (
		<Container>
			{userRole === "freelancer" && (
				<>
					<DashboardMenu userRole={userRole} />
					<Area>
						<DashboardHeader userRole={userRole} typePage={typePage} />
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
