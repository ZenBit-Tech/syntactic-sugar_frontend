import styled from "styled-components";

export const ContainerBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 1rem;
	align-items: center;

	button {
		min-width: 200px;
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	gap: 2rem;
`;

export const Box = styled.div`
	display: flex;
	justify-content: space-around;
	height: 15%;
`;

export const Item = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
	padding: 1rem 0;

	&#workHistory {
		padding: 0 0 0.5rem 0;
	}

	p {
		width: 70%;
		word-break: keep-all;
		word-wrap: break-word;
		text-align: right;
	}

	:last-child {
		border-bottom: none;
	}

	.skillsContainer {
		display: flex;
		align-items: flex-end;
		gap: 10px;
	}
`;

export const BottomText = styled(Item)`
	text-align: left;
	padding: 0;
`;

export const Title = styled.div`
	color: ${({ theme }) => theme.colors.darkGrey};
	background-color: white;

	&#workHistory {
		position: sticky;
		top: 0;
		padding: 1rem 0;
	}
`;

export const ItemContainer = styled.div`
	box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.colors.shadow};
	border-radius: 5px;
	padding: 1rem;
	width: 95%;
	display: flex;
	gap: 2rem;

	&#workHistory {
		width: 50%;
		gap: 0;
		padding: 0 1rem;
		height: auto;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}
`;

export const LeftSide = styled.div`
	width: 50%;
`;
export const RightSide = styled.div`
	width: 50%;
`;

export const Bottom = styled.div`
	display: flex;
	width: 95%;
	gap: 1rem;
	height: 30%;
`;

export const Subtitle = styled.div`
	color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Subcontainer = styled.div`
	border-bottom: 2px solid red;
	padding: 1rem 0;

	:last-child {
		border-bottom: none;
	}
`;

export const ImageWrapper = styled.div`
	border: 2px solid ${({ theme }) => theme.colors.grey};
	background: ${({ theme }) => theme.colors.grey};
	object-fit: cover;
	border-radius: 50%;
	height: 70%;
	width: 70%;
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 2rem;

	img {
		object-fit: cover;
		border-radius: 50%;
		height: 75px;
		width: 75px;
	}
`;
