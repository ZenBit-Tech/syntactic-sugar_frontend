import styled from "styled-components";
import { FlexContainer } from "@freelance/components";

export const Container = styled(FlexContainer)`
	margin-top: 10px;
`;

export const InputContainer = styled.div`
	color: ${({ theme }) => theme.colors.black};
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const StyledFileField = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 150px;

	div {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		width: 100%;
	}
	img {
		border: 2px solid ${({ theme }) => theme.colors.grey};
		background: ${({ theme }) => theme.colors.grey};
		object-fit: cover;
		border-radius: 10%;
		height: 100%;
		width: 100%;
	}
	label {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		color: ${({ theme }) => theme.colors.white};
		border-radius: 100px;
		font-size: 0.8rem;
		background-color: ${({ theme }) => theme.colors.lightRed};
		cursor: pointer;
		width: 100%;
		height: 30px;
		margin-top: 10px;

		&:not([disabled]):hover {
			filter: brightness(1.1);
			cursor: pointer;
		}
	}
	input[type="file"],
	input[type="button"] {
		display: none;
	}
`;
