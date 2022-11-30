import styled from "styled-components";
import Select from "react-select";

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


const StyledPage = styled.div`
	margin: auto;
	display: flex;
	height: 100vh;

	background: ${({ theme }) => theme.signPages.image}, ${({ theme }) => theme.colors.lightGrey};
`;

export const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	height: 95%;
	align-items: center;
	justify-items: center;

	input,
	select {
		border: 2px solid ${({ theme }) => theme.colors.grey};
		border-radius: 100px;
		height: 50px;
		padding-left: 3rem;
		width: 80%;
		color: ${({ theme }) => theme.colors.grey};
		outline: none;

		:valid {
			color: ${({ theme }) => theme.colors.black};
		}

		::placeholder {
			color: ${({ theme }) => theme.colors.grey};
		}
	}

	.selectContainer {
		position: relative;
		width: 80%;

		select {
			appearance: none;
			width: 100%;

			option {
				color: ${({ theme }) => theme.colors.black};
			}
		}

		::after {
			width: 0;
			height: 0;
			border-left: 6px solid transparent;
			border-right: 6px solid transparent;
			border-top: 6px solid ${({ theme }) => theme.colors.grey};
			position: absolute;
			top: 45%;
			right: 1rem;
			content: "";
			z-index: 99;
			pointer-events: none;
		}
	}

	#fullName {
		background: url("/assets/images/user_icon.png") no-repeat 20px center;
	}

	#country {
		background: url("/assets/images/country_icon.png") no-repeat 20px center;
	}

	#category {
		background: url("/assets/images/category_icon.png") no-repeat 20px center;
	}

	#hourRate {
		background: url("/assets/images/hour_rate_icon.png") no-repeat 20px center;
	}

	#position {
		background: url("/assets/images/position_icon.png") no-repeat 20px center;
	}

	#amountHours {
		background: url("/assets/images/amount_hours_icon.png") no-repeat 20px center;
	}

	#skills {
		background: url("/assets/images/skills_icon.png") no-repeat 20px center;
	}

	#skills {
		background: url("/assets/images/skills_icon.png") no-repeat 20px center;
	}

	#workExperience {
		background: url("/assets/images/work_experience_icon.png") no-repeat 20px center;
	}

	#employmentType {
		background: url("/assets/images/employment_type_icon.png") no-repeat 20px center;
	}

	#englishLevel {
		background: url("/assets/images/english_level_icon.png") no-repeat 20px center;
	}

	#fullName,
	#country,
	#category,
	#hourRate,
	#position,
	#amountHours,
	#skills,
	#workExperience,
	#employmentType,
	#englishLevel {
		background-size: 15px 15px;
	}

	button {
		grid-column: 1 / -1;
		max-width: 200px;
	}
`;

export { StyledPage };
