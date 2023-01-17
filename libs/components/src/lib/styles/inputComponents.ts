import styled, { css } from "styled-components";

const styles = css`
	border: 2px solid ${({ theme }) => theme.colors.grey};
	border-radius: 100px;
	height: 50px;
	padding-left: 1rem;
	width: 80%;
	color: ${({ theme }) => theme.colors.grey};
	outline: none;

	:focus,
	:hover {
		border-color: ${({ theme }) => theme.colors.black};
	}

	:valid {
		color: ${({ theme }) => theme.colors.black};
	}

	:focus::placeholder,
	:hover::placeholder {
		color: ${({ theme }) => theme.colors.black};
	}

	::placeholder {
		color: ${({ theme }) => theme.colors.grey};
	}
`;

interface IInput {
	width?: number;
}

export const Input = styled.input<IInput>`
	${styles}
	${({ width }) =>
		width &&
		css`
			width: ${width}%;
		`}
`;

export const Select = styled.select`
	${styles}
`;

export const TextArea = styled.textarea`
	${styles}
	height: auto;
	resize: none;
`;

interface IErrorsHandlerWrapper {
	positionRight: number;
	width: number;
	wrapperWidth?: number;
}

export const ErrorsHandlerWrapper = styled.div<IErrorsHandlerWrapper>`
	position: relative;
	${({ wrapperWidth }) =>
		wrapperWidth &&
		css`
			width: ${wrapperWidth}%;
		`}

	span {
		opacity: 0.8;
		top: 50%;
		right: ${({ positionRight }) => positionRight}%;
		text-align: center;
		align-items: center;
		justify-content: center;
		display: inline-flex;
		height: auto;
		max-height: 50px;
		width: ${({ width }) => width}%;
		padding: 0.5rem;
		color: ${({ theme }) => theme.colors.white};
		position: absolute;
		transform: translateY(-50%);
	}
`;

export const Form = styled.form`
	padding-left: 20px;
	padding-right: 20px;

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

	#workExperience {
		background: url("/assets/images/work_experience_icon.png") no-repeat 20px center;
	}

	#employmentType {
		background: url("/assets/images/employment_type_icon.png") no-repeat 20px center;
	}

	#englishLevel {
		background: url("/assets/images/english_level_icon.png") no-repeat 20px center;
	}

	#companyName {
		background: url("/assets/images/company_icon.png") no-repeat 20px center;
	}

	#linkedIn {
		background: url("/assets/images/linkedin_icon.png") no-repeat 20px center;
	}

	#website {
		background: url("/assets/images/website_icon.png") no-repeat 20px center;
	}

	#phone {
		background: url("/assets/images/phone_icon.png") no-repeat 20px center;
	}

	#fullName,
	#country,
	#category,
	#companyName,
	#hourRate,
	#linkedIn,
	#position,
	#amountHours,
	#skills,
	#workExperience,
	#employmentType,
	#englishLevel,
	#phone,
	#website {
		padding-left: 50px;
		background-size: 15px 15px;
	}
`;
