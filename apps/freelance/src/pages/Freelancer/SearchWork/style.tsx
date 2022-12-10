import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import Select from "react-select";
import ReactPaginate from "react-paginate";

const StyledPage = styled.div`
	margin: auto;
	display: flex;
	height: 100vh;

	background: ${({ theme }) => theme.signPages.image}, ${({ theme }) => theme.colors.lightGrey};

	* {
		scrollbar-width: auto;
		scrollbar-color: ${({ theme }) => theme.colors.lightRed} ${({ theme }) => theme.colors.white};
	}

	*::-webkit-scrollbar {
		width: 15px;
	}

	*::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.colors.white};
	}

	*::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.lightRed};
		border-radius: 10px;
		border: 3px solid ${({ theme }) => theme.colors.white};
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	height: 90%;
	justify-content: space-between;
	padding-top: 3%;
	position: relative;

	input,
	select {
		border: 2px solid ${({ theme }) => theme.colors.grey};
		border-radius: 100px;
		height: 50px;
		padding-left: 4rem;
		width: 80%;

		::placeholder {
			color: ${({ theme }) => theme.colors.grey};
		}
	}
	.selectContainer {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: space-around;
		select {
			appearance: none;
			width: 100%;
			option {
				color: ${({ theme }) => theme.colors.black};
			}
		}
		.selectContainer__select {
			margin: 10%;
		}
	}
	.selectContainer__left {
		position: relative;
		width: 40%;
	}
	.selectContainer__right {
		position: relative;
		width: 40%;
	}
	.selectContainer__buttons {
		width: 100%;
		display: flex;
		justify-content: center;
		button {
			margin: 5px;
		}
	}
`;

export const Wrapper = styled.div`
	display: flex;
	height: 75%;
`;

export const InputContainer = styled.div`
	width: 100%;
	overflow-y: auto;

	height: 150%;
`;

export const InputHeader = styled.div`
	position: sticky;
	top: 0;
	background: ${({ theme }) => theme.colors.white};
	padding: 0 0.5rem;
	height: 50px;

	display: flex;
	width: 100%;
	justify-content: flex-start;
	align-items: center;
	gap: 2rem;

	button {
		width: 100px;
		height: 20px;
	}
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	hr {
		margin-bottom: 2rem;
		width: 90%;
		border: 3px groove ${({ theme }) => theme.colors.darkGrey};
		border-radius: 20px;
	}

	button {
		max-width: 100px;
	}

	.jobsCardContainer {
		display: flex;
		width: 95%;
		height: 100px;
		margin: 2px;
		border: 1px solid ${({ theme }) => theme.colors.darkGrey};
		border-radius: 10px;
		:hover {
			box-shadow: 10px 5px 5px ${({ theme }) => theme.colors.lightRed};
		}
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 3rem;
	height: 1 0%;
	justify-content: center;
	position: absolute;
	bottom: -8%;
	width: 100%;

	button {
		max-width: 200px;
	}
`;

export const SelectElement = styled(Select)`
	.react-select__value-container {
		width: 80%;
		height: inherit;
	}

	.react-select__control {
		border: 2px solid ${({ theme }) => theme.colors.grey};
		border-radius: 100px;
		height: 50px;
		padding-left: 1rem;
		width: 100%;
		color: ${({ theme }) => theme.colors.grey};
		outline: none;
	}

	.react-select__indicator-separator {
		display: none;
	}

	.react-select__input-container {
		margin: 0;
		::after {
			display: none;
		}
	}

	.react-select__placeholder {
		color: ${({ theme }) => theme.colors.grey};
		margin: 0;
	}
`;

export { StyledPage };
