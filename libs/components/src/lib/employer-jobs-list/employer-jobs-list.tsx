import styled from "styled-components";

/* eslint-disable-next-line */
export interface EmployerJobsListProps {}

const StyledEmployerJobsList = styled.div`
	color: pink;
`;

export function EmployerJobsList(props: EmployerJobsListProps) {
	return (
		<StyledEmployerJobsList>
			<h1>Welcome to EmployerJobsList!</h1>
		</StyledEmployerJobsList>
	);
}

export default EmployerJobsList;
