import { render } from '@testing-library/react'

import ExampleHeader from './example-header'

describe('ExampleHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExampleHeader />)
    expect(baseElement).toBeTruthy()
  })
})
