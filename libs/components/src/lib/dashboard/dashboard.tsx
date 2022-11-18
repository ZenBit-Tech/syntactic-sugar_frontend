import { Container, Page, Area } from './dashboard.styled';
import { DashboardHeader, DashboardMenu } from '@freelance/components';

export interface DashboardProps {
  children: React.ReactNode;
}

export function Dashboard({ children }: DashboardProps) {
  return (
    <Container>
      <DashboardMenu userRole='freelancer' />
      <Area>
        <DashboardHeader />
        <Page>{children}</Page>
      </Area>
    </Container>
  );
}

export default Dashboard;
