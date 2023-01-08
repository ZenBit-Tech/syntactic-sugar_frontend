import Select from "react-select";
import styled from "styled-components";
import { StyledButton } from "@freelance/components";

export const Form = styled.form`
	display: block;
`;  

export const SelectElement = styled(Select)`
    margin-bottom: 0.7rem;

	.react-select__value-container {
		width: 80%;
		height: inherit;
	}

	.react-select__control {
		border: 2px solid ${({ theme }) => theme.colors.grey};
		border-radius: 100px;
		height: 40px;
        width: 100%;
		padding-left: 1rem;
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
        display: none;
	}
`;

export const Label = styled.label`
    font-size: 1rem;
`;

export const Input = styled.input`
    display: block;
    margin-bottom: 1rem;
    border: 2px solid #D9D9D9;
    border-radius: 100px;
    height: 40px;
    width: 100%;
    padding-left: 1.5rem;
`;

export const HeaderButton = styled(StyledButton)`
    height: 1.5rem;
    width: 30%;
`;

export const HeaderButtonWrapp = styled.div`
    display: flex;
    margin-bottom: 0.8rem;
    justify-content: space-around;
`;

export const OpenFilterBtn = styled(StyledButton)`
    position: absolute;
    top: 20%;
    right: 100%;
    border-radius: 20px 0px 0px 20px;
    background-color: red;
    width: 12%;
    transform: rotate(0deg);
    outline-style: none;
`;

export const BtnText = styled.p`
    writing-mode: vertical-lr;
    text-orientation: upright; 
    transform: rotate(0deg);
    letter-spacing: -4px;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	gap: 2rem;
`;
