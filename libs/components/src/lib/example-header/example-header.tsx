import styled from 'styled-components'

/* eslint-disable-next-line */
export interface ExampleHeaderProps {}

const StyledExampleHeader = styled.div`
  color: black;
  font-size: large;
`

export function ExampleHeader(props: ExampleHeaderProps) {
  return (
    <StyledExampleHeader>
      <h1>Welcome to Header, guys!</h1>
    </StyledExampleHeader>
  )
}

export default ExampleHeader
