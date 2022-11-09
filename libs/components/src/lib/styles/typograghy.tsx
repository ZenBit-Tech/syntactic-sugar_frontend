import styled, { css } from 'styled-components';
import { BaseTitle } from '@freelance/components';

export const StyledTitle = styled(BaseTitle)`
  font-weight: ${({ fontWeight }) => fontWeight};

  ${({ fontSize }) => {
    switch (fontSize) {
      case 'lg':
        return css`
          font-size: 2rem;
        `;
      case 'md':
        return css`
          font-size: 1.25rem;
        `;
      case 'sm':
        return css`
          font-size: 1rem;
        `;
    }
  }}
`;

interface iStyledParagraph {
  opacity: number;
  fontSize: 'lg' | 'md' | 'sm';
}

export const StyledParagraph = styled.p<iStyledParagraph>`
  opacity: ${({ opacity }) => (opacity ? opacity : 0.5)};

  font-weight: 400;

  strong,
  b {
    font-weight: 700;
  }

  color: ${({ theme }) => theme.colors.primary};

  ${({ fontSize }) => {
    switch (fontSize) {
      case 'lg':
        return css`
          font-size: 1.25rem;
        `;
      case 'md':
        return css`
          font-size: 1rem;
        `;
      case 'sm':
        return css`
          font-size: 0.75rem;
        `;
    }
  }}
`;
