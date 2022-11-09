import { render } from '@testing-library/react';

import BaseTitle from './baseTitle';

describe('BaseTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BaseTitle />);
    expect(baseElement).toBeTruthy();
  });
});
