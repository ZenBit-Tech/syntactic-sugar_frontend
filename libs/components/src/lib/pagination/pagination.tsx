import { useState } from "react";
import { IEmployerResponse, InstObject, Proposal } from "redux/jobs";
import { IEduResponse, IWorkHistoryResponse } from "redux/createFreelancer/freelancer-pageApi";
import {
	PaginationContainer,
	PaginationItemsWrapper,
	StyledReactPagination,
} from "./pagination.styled";
import { Items } from "./items";

export interface CommonObject {
	id: string;
	title?: string;
	description?: string;
	position?: string;
	countries?: InstObject[];
	country?: InstObject;
	employmentType?: string;
	hourRate?: string;
	availableAmountOfHours?: string;
	workExperience?: string;
	englishLevel?: string;
	proposals?: Proposal[];
	category?: InstObject;
	skills?: InstObject[];
	createdDate?: string;
	updatedDate?: string;
	isPublished?: boolean;
	isProposal?: boolean;
	otherRequirenments?: string;
	employer?: IEmployerResponse;
	fullName?: string;
	education?: IEduResponse[];
	workHistory?: IWorkHistoryResponse[];
	otherExperience?: string;
	image?: string;
	user?: { id: number; email: string };
}

export interface PaginationProps {
	itemsPerPage: number;
	user: string;
	data?: CommonObject[];
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
				<Items data={currentItems} user={user} typePage={typePage} />
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
