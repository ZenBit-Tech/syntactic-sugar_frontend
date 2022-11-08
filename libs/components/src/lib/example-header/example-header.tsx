// import { Header } from 'antd/lib/layout/layout';
// import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { StyledHeader } from './example-header.styled';
import { StyledTitle } from '../../../../../apps/freelance/src/styles/typograghy';
import { ThemeColors } from '../../../../../apps/freelance/src/styles/global.styled';
import { ThemeProvider } from 'styled-components';
// import 'antd/dist/antd.css';

/* eslint-disable-next-line */
export interface ExampleHeaderProps {}

// const { Title } = Typography;

export function ExampleHeader(props: ExampleHeaderProps) {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={ThemeColors}>
      <StyledHeader>
        <StyledTitle tag="h1" fontWeight={800} fontSize="lg">
          {t('Hello, Syntactic sugar!')}
        </StyledTitle>
      </StyledHeader>
    </ThemeProvider>
  );
}

export default ExampleHeader;
