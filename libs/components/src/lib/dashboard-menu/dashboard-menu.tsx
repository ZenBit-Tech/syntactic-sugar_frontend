import { Container } from './dashboard-menu.styled';
import { StyledButton } from '@freelance/components';

/* eslint-disable-next-line */
export interface DashboardMenuProps {
  userRole: 'freelancer' | 'jobOwner';
}

export function DashboardMenu({ userRole }: DashboardMenuProps) {
  return (
    <Container>
      {userRole === 'freelancer' && (
        <StyledButton buttonSize="md" buttonColor="redGradient">
          Menu Freeelancer
        </StyledButton>
      )}
      {userRole === 'jobOwner' && (
        <StyledButton buttonSize="md" buttonColor="redGradient">
          Menu JobOwner
        </StyledButton>
      )}
    </Container>
  );
}

export default DashboardMenu;
