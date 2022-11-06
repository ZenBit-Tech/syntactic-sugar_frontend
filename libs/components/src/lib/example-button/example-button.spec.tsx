import { render } from '@testing-library/react';

import ExampleButton from './example-button';

describe('ExampleButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExampleButton />);
    expect(baseElement).toBeTruthy();
  });
});
