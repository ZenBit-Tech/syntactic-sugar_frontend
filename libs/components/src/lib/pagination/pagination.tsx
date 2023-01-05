import { useState } from "react";
import { JobsInterface } from "redux/jobs";
import {
	PaginationContainer,
	PaginationItemsWrapper,
	StyledReactPagination,
} from "./pagination.styled";
import { Items } from "./items";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";

export interface PaginationProps {
	itemsPerPage: number;
	user: string;
	data: Array<any> | undefined;
	typePage?: "proposals" | "jobs" | "talents";
}

export interface ReactPaginateEvent {
	selected: number;
}

export function Pagination({ itemsPerPage, user, data, typePage }: PaginationProps) {
	const dataLength = data?.length ? data?.length : 0;
	const [itemOffset, setItemOffset] = useState<number>(0);
	const endOffset = itemOffset + itemsPerPage;
	const currentItems = data?.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(dataLength / itemsPerPage);
	const handlePageClick = (event: ReactPaginateEvent) => {
		const newOffset = (event.selected * itemsPerPage) % dataLength;
		setItemOffset(newOffset);
	};

	return (
		<PaginationContainer>
			<PaginationItemsWrapper>
				<Items jobs={currentItems} freelancers={currentItems} user={user} typePage={typePage} />
			</PaginationItemsWrapper>
			<StyledReactPagination
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="< previous"
			/>
		</PaginationContainer>
	);
}

export default Pagination;
