import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addFreelancerInfo } from "src/redux/createFreelancer/freelancer-slice";
import { useAppDispatch } from "src/redux/example-hooks";
import {
	countries,
	categories,
	skills,
	employmentType,
	hourRate,
	hoursAmount,
	workExperience,
	englishLevel,
	SelectOptions,
} from "utils/select-options/options";

export interface IFormInput {
	fullName: string;
	category: SelectOptions;
	position: string;
	skills: SelectOptions[];
	employmentType: SelectOptions;
	country: SelectOptions;
	hourRate: SelectOptions;
	availableAmountOfHour: SelectOptions;
	workExperience: SelectOptions;
	englishLevel: SelectOptions;
}

export const useCreateFreelancer = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<IFormInput> = async values => {
		const freelancerInfo = {
			fullName: values.fullName,
			category: values.category.label,
			position: values.position,
			skills: values.skills.map(skill => skill.label),
			employmentType: values.employmentType.label,
			country: values.country.label,
			hourRate: values.hourRate.label,
			availableAmountOfHour: values.availableAmountOfHour.label,
			workExperience: values.workExperience.label,
			englishLevel: values.englishLevel.label,
		};
		try {
			await dispatch(addFreelancerInfo(freelancerInfo));
			navigate("/freelancer/create-profile2");
		} catch (error) {
			alert(error);
		}
	};

	return onSubmit;
};
