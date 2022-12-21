import styled from "styled-components";

export const Container = styled.div`
	height: 12%;
	width: 100%;
	border-top-right-radius: 30px;
	background: ${({ theme }) => theme.colors.lightRed};

	display: flex;
	justify-content: space-between;
	padding-right: 2rem;
`;

export const UserInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-left: 2rem;
	gap: 2rem;

	img {
		border: 2px solid ${({ theme }) => theme.colors.grey};
		background: ${({ theme }) => theme.colors.grey};
		object-fit: cover;
		border-radius: 50%;
		height: 90%;
		width: 25%;
	}

	p {
		color: ${({ theme }) => theme.colors.white};
	}
`;

export const UserDetails = styled.div`
	text-align: right;
	line-height: 1.8rem;
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	button {
		padding: 0.4rem;
		display: flex;
		justify-content: space-evenly;
		border-radius: 12px;
		border: 3px solid ${({ theme }) => theme.colors.darkRed};

		img {
			width: 20%;
		}
	}
`;
