import styled from "styled-components";

/* eslint-disable-next-line */
export interface JobPostingSecondFormProps {}

const StyledJobPostingSecondForm = styled.div`
	color: pink;
`;

export function JobPostingSecondForm(props: JobPostingSecondFormProps) {
	return (
		<StyledJobPostingSecondForm>
			<h1>Welcome to JobPostingSecondForm!</h1>
		</StyledJobPostingSecondForm>
	);
}

export default JobPostingSecondForm;
