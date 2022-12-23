import { useState } from "react";
import { JobsInterface } from "redux/jobs";
import { StyledReactPagination } from "./pagination.styled";
import { Items } from "./items";

export interface PaginationProps {
	itemsPerPage: number;
	user: string;
	jobs: JobsInterface[] | undefined;
	typePage: 'proposals' | 'jobs';
}

export interface ReactPaginateEvent {
	selected: number;
}

export function Pagination({ itemsPerPage, user, jobs, typePage }: PaginationProps) {
	const jobsLength = jobs?.length ? jobs?.length : 0;
	const [itemOffset, setItemOffset] = useState<number>(0);
	const endOffset = itemOffset + itemsPerPage;
	const currentItems = jobs?.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(jobsLength / itemsPerPage);
	const handlePageClick = (event: ReactPaginateEvent) => {
		const newOffset = (event.selected * itemsPerPage) % jobsLength;
		setItemOffset(newOffset);
	};

	return (
		<>
			<Items currentItems={currentItems} user={user} typePage={typePage}/>
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
