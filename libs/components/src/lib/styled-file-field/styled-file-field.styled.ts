import styled from "styled-components";

export const StyledFileImage = styled.img`
	border: 2px solid ${({ theme }) => theme.colors.grey};
	background: ${({ theme }) => theme.colors.grey};
	object-fit: cover;
	border-radius: 10%;
	width: 100%;
`;

export const StyledFileButton = styled.label`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 45%;
	padding: 0.6rem 0;
	color: ${({ theme }) => theme.colors.white};
	border-radius: 12px;
	font-size: 0.8rem;
	background-color: ${({ theme }) => theme.colors.darkRed};
	cursor: pointer;
	transition: all ease-in-out 0.4s;

	input[type="file"],
	input[type="button"] {
		display: none;
	}

	&:not([disabled]):hover {
		filter: brightness(1.1);
		cursor: pointer;
	}
`;
