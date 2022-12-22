import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	margin: auto;
	width: 90%;
	height: 90%;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 30px;
`;

export const Area = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Page = styled.div`
	height: 88%;
	padding: 1rem;
`;
