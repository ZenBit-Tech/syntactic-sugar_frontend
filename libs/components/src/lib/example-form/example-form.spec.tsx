import { render } from '@testing-library/react';

import ExampleForm from './example-form';

describe('ExampleForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExampleForm />);
    expect(baseElement).toBeTruthy();
  });
});