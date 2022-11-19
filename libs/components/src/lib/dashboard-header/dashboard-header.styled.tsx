import styled from "styled-components";

export const Container = styled.div`
	height: 100px;
	width: 100%;
	border-top-right-radius: 30px;
	background-color: ${({ theme }) => theme.colors.lightRed};

	display: flex;
	justify-content: space-between;
`;

export const UserInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-left: 2rem;
	gap: 2rem;

	p {
		color: ${({ theme }) => theme.colors.white};
	}
`;

export const Avatar = styled.div`
	img {
		border: 2px solid ${({ theme }) => theme.colors.grey};
		object-fit: cover;
		border-radius: 50%;
		height: 70px;
		width: 70px;
	}
`;

export const UserDetails = styled.div`
	text-align: right;
	line-height: 1.8rem;
`;

export const ButtonsWrapper = styled.div`
	min-width: 330px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	button {
		width: 140px;
		height: 40px;
		display: flex;
		justify-content: space-evenly;
		border-radius: 12px;
		border: 3px solid ${({ theme }) => theme.colors.darkRed};

		img {
			width: 20%;
		}
	}
`;
