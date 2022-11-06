import styled from 'styled-components';
import { Header } from 'antd/lib/layout/layout';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import 'antd/dist/antd.css';

/* eslint-disable-next-line */
export interface ExampleHeaderProps {}

const StyledExampleHeader = styled.div`
// Your styles here
color: white;
`
const { Title } = Typography;

export function ExampleHeader(props: ExampleHeaderProps) {
  const { t } = useTranslation();
  return (
    <StyledExampleHeader>
      <Header><Title style={{color: "white"}}>{t('Hello, Syntactic sugar!')}</Title></Header>
    </StyledExampleHeader>
  )
}

export default ExampleHeader
