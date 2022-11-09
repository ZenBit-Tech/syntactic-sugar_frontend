import { render } from '@testing-library/react';

import SignupGoogle from './signup-google';

describe('SignupGoogle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignupGoogle />);
    expect(baseElement).toBeTruthy();
  });
});
