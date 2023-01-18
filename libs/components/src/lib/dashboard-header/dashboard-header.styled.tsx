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
		height: 77px;
		width: 77px;
	}

	p {
		color: ${({ theme }) => theme.colors.white};
	}
`;

export const StyledEditButton = styled.button`
	outline-style: none;
	color: ${({ theme }) => theme.colors.white};

	p {
		transition: all ease-in-out 0.4s;
	}

	:hover p {
		font-weight: 700;
	}

	span {
		font-size: 1.5rem;
		transition: all ease-in-out 0.4s;
	}

	:hover span {
		transform: scale(1.2);
	}
`;

export const UserDetails = styled.div`
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
