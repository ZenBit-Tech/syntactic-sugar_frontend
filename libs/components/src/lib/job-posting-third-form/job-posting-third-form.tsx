import styled from "styled-components";

/* eslint-disable-next-line */
export interface JobPostingThirdFormProps {}

const StyledJobPostingThirdForm = styled.div`
	color: pink;
`;

export function JobPostingThirdForm(props: JobPostingThirdFormProps) {
	return (
		<StyledJobPostingThirdForm>
			<h1>Welcome to JobPostingThirdForm!</h1>
		</StyledJobPostingThirdForm>
	);
}

export default JobPostingThirdForm;
