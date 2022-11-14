import { render } from '@testing-library/react';

import MessageContainer from './message-container';

describe('MessageContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MessageContainer />);
    expect(baseElement).toBeTruthy();
  });
});
