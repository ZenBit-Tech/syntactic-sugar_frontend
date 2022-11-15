import { render } from '@testing-library/react';

import RecoverPassFirstForm from './recover-pass-first-form';

describe('RecoverPassFirstForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RecoverPassFirstForm />);
    expect(baseElement).toBeTruthy();
  });
});
