import { render } from '@testing-library/react';

import LoginForm from './signup-form';

describe('LoginForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginForm />);
    expect(baseElement).toBeTruthy();
  });
});
