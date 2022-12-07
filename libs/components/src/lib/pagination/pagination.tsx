import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { Container, StyledReactPagination } from "./pagination.styled";
import { jobs } from "utils/jobs/jobs";
import { Items, JobsInterface } from "./items";

/* eslint-disable-next-line */
export interface PaginationProps {
	itemsPerPage: number;
  user: string;
}

export interface ReactPaginateEvent {
	selected: number;
}

export function Pagination({ itemsPerPage, user }: PaginationProps) {
	const [itemOffset, setItemOffset] = useState(0);
	const endOffset = itemOffset + itemsPerPage;
	const currentItems = jobs.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(jobs.length / itemsPerPage);
	const handlePageClick = (event: ReactPaginateEvent) => {
		const newOffset = (event.selected * itemsPerPage) % jobs.length;
		setItemOffset(newOffset);
	};

	return (
		<>
			<Items currentItems={currentItems} user={user}/>
			<StyledReactPagination
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="< previous"
			/>
		</>
	);
}

export default Pagination;
