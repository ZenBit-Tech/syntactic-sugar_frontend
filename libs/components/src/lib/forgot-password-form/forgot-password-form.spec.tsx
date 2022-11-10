import { render } from '@testing-library/react';

import ForgotPasswordForm from './forgot-password-form';

describe('ForgotPasswordForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ForgotPasswordForm />);
    expect(baseElement).toBeTruthy();
  });
});
