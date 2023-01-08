import { FilterContainer } from "./filter-container.styled"

export interface IFilterBox {
    children: JSX.Element;
    isActive: boolean;
}

export const FilterBox = ({children, isActive}: IFilterBox) => {
    return (
        <FilterContainer isShown={isActive}>
            {children}
        </FilterContainer>  
    )
}