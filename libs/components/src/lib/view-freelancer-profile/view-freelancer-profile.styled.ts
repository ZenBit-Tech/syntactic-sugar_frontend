import styled from "styled-components";

export const StyledPage = styled.div`
	margin: auto;
	display: flex;
	height: 100vh;
	background: ${({ theme }) => theme.signPages.image}, ${({ theme }) => theme.colors.lightGrey};
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 1rem;
	align-items: center;
	button {
		max-width: 200px;
	}
`;

export const Item = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: end;
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
	padding: 10px 0;
	gap: 1rem;
	&#workHistory {
		padding: 0.5rem;
	}
	&#other {
		border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
	}
	p {
		width: 70%;
		word-break: keep-all;
		word-wrap: break-word;
		text-align: right;
	}
`;

export const Title = styled.div`
	color: ${({ theme }) => theme.colors.darkGrey};
	background-color: ${({ theme }) => theme.colors.white};
	&#workHistory {
		position: sticky;
		top: 0;
		padding: 1rem 0;
	}
`;

export const ItemContainer = styled.div`
	box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 10px;
	width: 95%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: end;
	gap: 1rem;
	&#workHistory {
		width: 50%;
		gap: 0;
		padding: 0 1rem;
		height: 220px;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}
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

export const SkillsWrapper = styled.div`
	display: flex;
	align-items: end;
	gap: 10px;

	p {
		width: auto;
	}
`;
