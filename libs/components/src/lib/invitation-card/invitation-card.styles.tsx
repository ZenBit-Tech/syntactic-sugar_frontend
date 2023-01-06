import styled from "styled-components";
import Select from "react-select";

export const SelectElement = styled(Select)`
	.react-select__control {
		border-radius: 100px;
		border: 2px solid ${({ theme }) => theme.colors.grey};
	}

	.react-select__indicator-separator {
		display: none;
	}

	margin: 0 auto;
	width: 45%;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;
