import { render } from '@testing-library/react';

import DashboardHeader from './dashboard-header';

describe('DashboardHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardHeader />);
    expect(baseElement).toBeTruthy();
  });
});
