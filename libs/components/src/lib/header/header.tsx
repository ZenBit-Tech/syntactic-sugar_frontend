import styled from 'styled-components'

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.div`
  color: pink;
  font-size: large;
`

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <h1>Welcome to Header, guys! If you need some help with how it works, please, contact me!!!!</h1>
    </StyledHeader>
  )
}

export default Header
