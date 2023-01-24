import { useState } from "react";
import { ICommonObject, TypePage } from "@freelance/components";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { IResponseEmployer } from "redux/createEmployer/employerApi";
import {
	PaginationContainer,
	PaginationItemsWrapper,
	StyledReactPagination,
} from "./pagination.styled";
import { Items } from "./items";

export interface PaginationProps {
	itemsPerPage: number;
	user: string;
	data?: ICommonObject[];
	typePage?: TypePage;
	profile?: IResponse | IResponseEmployer;
	refetch?: () => void;
	closeProposalsList?: () => void;
	openProposalsList?: () => void;
}

export interface ReactPaginateEvent {
	selected: number;
}

export function Pagination({
	itemsPerPage,
	user,
	data,
	typePage,
	profile,
	refetch,
	closeProposalsList,
	openProposalsList,
}: PaginationProps) {
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
				<Items
					data={currentItems}
					user={user}
					typePage={typePage}
					profile={profile}
					refetch={refetch}
					closeProposalsList={closeProposalsList}
					openProposalsList={openProposalsList}
				/>
			</PaginationItemsWrapper>
			{dataLength > 5 && (
				<StyledReactPagination
					breakLabel="..."
					nextLabel="next >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					previousLabel="< previous"
				/>
			)}
		</PaginationContainer>
	);
}

export default Pagination;
