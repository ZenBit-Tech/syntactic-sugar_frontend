import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const Container = styled.div`
	display: grid;
	padding-left: 2.5%;
	padding-right: 2.5%;
	gap: 10px;
	width: 100%;
`;

export const StyledReactPagination = styled(ReactPaginate)`
	width: 100%;
	padding: 2%;
	display: flex;
	width: 40%;
	justify-content: space-between;
	a {
		font-size: 12px;
		color: ${({ theme }) => theme.colors.black};
	}
`;
