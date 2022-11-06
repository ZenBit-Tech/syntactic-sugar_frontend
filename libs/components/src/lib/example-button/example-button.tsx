import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

/* eslint-disable-next-line */
export interface ExampleButtonProps {}

const StyledExampleButton = styled.select`
  color: #001529;
  display: block;
  margin-top: 20px;
  width: 50%;
  border-radius: 4px;
  font-size: 14px;
`;

export function ExampleButton(props: ExampleButtonProps) {
  const {i18n} = useTranslation();

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language); //change the language
}

  return (
      <StyledExampleButton onChange={onClickLanguageChange}>
        <option value="en" >English</option>
        <option value="ua" >Ukrainian</option>
        <option value="fr" >French</option>
    </StyledExampleButton>
  );
}

export default ExampleButton;
