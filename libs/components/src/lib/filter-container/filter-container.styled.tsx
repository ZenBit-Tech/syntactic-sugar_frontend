import styled, { css } from "styled-components";

interface IFilterContainer {
    isShown: boolean;
}

export const FilterContainer = styled.div<IFilterContainer>`
    padding: 1.5rem;
    border-radius: 15px;
    position: absolute;
    top: 17%;
    right: 5.9%;
    width: 27%;
    background-color: rgb(229, 218, 218, 0.85);
    transition: 0.5s;
    transform: translateX(120%);
    
    ${({ isShown }) => isShown && css`transform: translateX(13%)`}
`;
