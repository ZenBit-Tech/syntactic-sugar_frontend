import { render } from '@testing-library/react';

import BaseTitle from './base-title';

describe('BaseTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseTitle />);
    expect(baseElement).toBeTruthy();
  });
});
