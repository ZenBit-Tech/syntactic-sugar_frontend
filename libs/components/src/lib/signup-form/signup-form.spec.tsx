import { render } from '@testing-library/react';

import SignupForm from './signup-form';

describe('SignupForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignupForm />);
    expect(baseElement).toBeTruthy();
  });
});
