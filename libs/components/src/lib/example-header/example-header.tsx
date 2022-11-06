import { Header } from 'antd/lib/layout/layout';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { StyledHeader } from './example-header.styled';
import 'antd/dist/antd.css';

/* eslint-disable-next-line */
export interface ExampleHeaderProps {}

const { Title } = Typography;

export function ExampleHeader(props: ExampleHeaderProps) {
  const { t } = useTranslation();
  return (
    <StyledHeader>
      <Header><Title style={{color: "white"}}>{t('Hello, Syntactic sugar!')}</Title></Header>
    </StyledHeader>
  )
}

export default ExampleHeader
