import { render } from '@testing-library/react';

import FormHeader from './form-header';

describe('FormHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormHeader />);
    expect(baseElement).toBeTruthy();
  });
});
