import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	padding: 5px;
`;

export const StyledJobCard = styled.div`
	display: grid;
	width: 100%;
	gap: 10px;
	padding: 10px;
	border: 2px solid ${({ theme }) => theme.colors.grey};
	border-radius: 10px;
	max-height: 200px;
	min-height: 130px;
	overflow: hidden;
	:hover {
		transform: scale(1.03);
	}
`;

export const StyledJobCardHeader = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr 2fr;
	gap: 10px;
	justify-items: center;
	align-items: center;

	padding-bottom: 10px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

	button {
		padding: 0.4rem;
	}
`;

export const StyledJobCardHeaderLeft = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
	align-items: center;
`;

export const StyledJobCardParagraph = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 10px;

	strong {
		font-size: 0.7rem;
	}
`;

export const JobButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

export const FreelancerButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
	width: 100%;
`;

export const EmployerButtonWrapper = styled.div`
	display: inline-block;
	text-align: right;
	width: 50%;
	flex-grow: 1;
`;

export const LocationBlock = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
`;

export const CountriesContainer = styled.div`
	display: flex;
`;
