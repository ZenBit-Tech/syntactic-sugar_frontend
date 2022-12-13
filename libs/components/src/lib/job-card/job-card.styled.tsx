import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	padding: 5px;
`;

export const StyledJobCard = styled.div`
	display: flex;
	height: 100px;
	flex-direction: column;
	justify-content: space-around;
`;

export const StyledJobCardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledJobCardHeaderLeft = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 30%;
	button {
		height: 5%;
		width: 60%;
	}
`;

export const StyledJobCardParagraph = styled.div`
	display: flex;
	justify-content: space-between;
`;
