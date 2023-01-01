import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { styledScroll } from "@freelance/components";

export const Container = styled.div`
	display: grid;
	gap: 10px;
	padding-top: 0.5%;
	padding-bottom: 0.5%;
	padding-left: 2.5%;
	padding-right: 2.5%;
`;

export const PaginationItemsWrapper = styled.div`
	overflow-y: scroll;
	${styledScroll}
`;

export const PaginationContainer = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	min-height: 0px;

	> * {
		min-height: 0px;
	}
`;

export const StyledReactPagination = styled(ReactPaginate)`
	width: 100%;
	padding: 2%;
	display: flex;
	width: 40%;
	margin-left: auto;
	margin-right: auto;
	justify-content: space-between;
	a {
		font-size: 14px;
		color: ${({ theme }) => theme.colors.black};
	}
`;
