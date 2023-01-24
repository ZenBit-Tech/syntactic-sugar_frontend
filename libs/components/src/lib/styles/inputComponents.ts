import styled, { css } from "styled-components";

interface Icss {
	selectIcons?: boolean;
}

export const inputIcons = css<Icss>`
	#fullName ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/user_icon.png") no-repeat 20px 46%;
	}

	#country ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/country_icon.png") no-repeat 20px 46%;
	}

	#category ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/category_icon.png") no-repeat 20px 46%;
	}

	#hourRate ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/hour_rate_icon.png") no-repeat 20px 46%;
	}

	#position ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/position_icon.png") no-repeat 20px 46%;
	}

	#amountHours ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/amount_hours_icon.png") no-repeat 20px 46%;
	}

	#skills ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/skills_icon.png") no-repeat 20px center;
	}

	#workExperience ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/work_experience_icon.png") no-repeat 20px 46%;
	}

	#employmentType ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/employment_type_icon.png") no-repeat 20px 46%;
	}

	#englishLevel ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/english_level_icon.png") no-repeat 20px center;
	}

	#companyName ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/company_icon.png") no-repeat 20px 47%;
	}

	#linkedIn ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/linkedin_icon.png") no-repeat 20px center;
	}

	#website ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/website_icon.png") no-repeat 20px center;
	}

	#phone ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/phone_icon.png") no-repeat 20px center;
	}

	#institute ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/institute_icon.png") no-repeat 20px 46%;
	}

	#occupation ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/occupation_icon.png") no-repeat 20px center;
	}

	#period ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/period_icon.png") no-repeat 20px 46%;
	}

	#company ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/company_icon.png") no-repeat 20px 46%;
	}

	#workPosition ${({ selectIcons }) => selectIcons && ".react-select__control"} {
		background: url("/assets/images/work_position_icon.png") no-repeat 20px 46%;
	}

	#fullName
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#country
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#category
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#companyName
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#hourRate
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#linkedIn
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#position
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#amountHours
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#skills
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#workExperience
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#employmentType
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#englishLevel
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#phone
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#website
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#institute
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#occupation
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#period
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#company
		${({ selectIcons }) => selectIcons && ".react-select__control"},
		#workPosition
		${({ selectIcons }) => selectIcons && ".react-select__control"} {
		padding-left: 50px;
		background-size: 15px 15px;
	}
`;

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

interface IErrorsHandlerWrapper extends Icss {
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

	${inputIcons};
`;

export const Form = styled.form`
	padding-left: 20px;
	padding-right: 20px;
`;
