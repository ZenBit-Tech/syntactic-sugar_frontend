import { render } from '@testing-library/react';

import SideContainer from './side-container';

describe('SideContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SideContainer />);
    expect(baseElement).toBeTruthy();
  });
});
