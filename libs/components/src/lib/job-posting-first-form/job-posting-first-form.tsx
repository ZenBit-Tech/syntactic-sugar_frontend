import styled from "styled-components";

/* eslint-disable-next-line */
export interface JobPostingFirstFormProps {}

const StyledJobPostingFirstForm = styled.div`
	color: pink;
`;

export function JobPostingFirstForm(props: JobPostingFirstFormProps) {
	return (
		<StyledJobPostingFirstForm>
			<h1>Welcome to JobPostingFirstForm!</h1>
		</StyledJobPostingFirstForm>
	);
}

export default JobPostingFirstForm;
