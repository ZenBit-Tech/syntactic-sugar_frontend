import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addNewJobInfo } from "redux/jobs";
import { useAppDispatch } from "redux/hooks";
import { CREATE_NEW_JOB_THIRD_PAGE } from "utils/constants/links";
import { IJobPostingSecondForm, IUseJobPostingSecondForm } from "@freelance/components";

export const useJobPostingSecondFormHook = (): IUseJobPostingSecondForm => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<IJobPostingSecondForm> = data => {
		const countries = data.countries.map(country => country.label);
		const countriesCheck = countries.some(country => country === undefined);

		if (!countriesCheck) {
			const resultData = {
				countries: countries as string[],
				category: data.category.label,
				position: data.position,
				employmentType: data.employmentType.label,
				availableAmountOfHours: data.availableAmountOfHours.label,
				hourRate: data.hourRate.label,
				workExperience: data.workExperience.label,
			};

			dispatch(addNewJobInfo(resultData));
			navigate(CREATE_NEW_JOB_THIRD_PAGE);
		}
	};

	return { onSubmit };
};
