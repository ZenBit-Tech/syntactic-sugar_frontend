import styled, { css } from "styled-components";

interface IFilterContainer {
    isShown: boolean;
}

export const FilterContainer = styled.div<IFilterContainer>`
    padding: 2rem;
    border-radius: 15px;
    border:  1px solid ${({ theme }) => theme.colors.lightRed};
    position: absolute;
    top: 16%;
    right: 6%;
    width: 30%;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    transition: 0.5s;
    transform: translateX(120%);
    
    ${({ isShown }) => isShown && css`transform: translateX(20%)`}
`;
