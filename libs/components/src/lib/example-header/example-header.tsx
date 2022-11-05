import styled from 'styled-components';
import { Header } from 'antd/lib/layout/layout';
import { Typography } from 'antd';
import 'antd/dist/antd.css';

/* eslint-disable-next-line */
export interface ExampleHeaderProps {}

const StyledExampleHeader = styled.div`
// Your styles here
color: white;
`
const { Title } = Typography;

export function ExampleHeader(props: ExampleHeaderProps) {
  return (
    <StyledExampleHeader>
      <Header><Title style={{color: "white"}}>Hello, Syntactic sugar!</Title></Header>
    </StyledExampleHeader>
  )
}

export default ExampleHeader
