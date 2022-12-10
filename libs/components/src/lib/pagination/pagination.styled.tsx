import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const Container = styled.div``;

export const StyledReactPagination = styled(ReactPaginate)`
	padding: 2%;
	display: flex;
	width: 30%;
	justify-content: space-between;
	a {
		color: ${({ theme }) => theme.colors.black};
	}
`;
