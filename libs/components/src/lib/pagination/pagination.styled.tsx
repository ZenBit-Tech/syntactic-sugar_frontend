import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const Container = styled.div`
	display: grid;
	padding-top: 0.5%;
	padding-left: 2.5%;
	padding-right: 2.5%;
	gap: 10px;
`;

export const StyledReactPagination = styled(ReactPaginate)`
	padding: 2%;
	display: flex;
	width: 30%;
	justify-content: space-between;
	a {
		color: ${({ theme }) => theme.colors.black};
	}
`;
