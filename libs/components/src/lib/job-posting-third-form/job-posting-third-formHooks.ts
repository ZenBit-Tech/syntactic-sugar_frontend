import { useEffect } from "react";
import { toast } from "react-toastify";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { resetState, getStoredJobInfo, useCreateJobMutation } from "redux/jobs";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { IJobPostingThirdForm, IUseJobPostingThirdForm } from "@freelance/components";
import { EMPLOYER_JOBS_PAGE } from "utils/constants/links";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";

export const useJobPostingThirdFormHook = (): IUseJobPostingThirdForm => {
	const dispatch = useAppDispatch();
	const storedJobInfo = useAppSelector(getStoredJobInfo);
  const navigate = useNavigate();
  const { SERVER_ERROR_MESSAGE } = useJobsValidationErrorMessages();
	const [createJob, { isLoading, isSuccess, isError }] = useCreateJobMutation();

	const onSubmit: SubmitHandler<IJobPostingThirdForm> = async data => {
		try {
			const skills = data.skills.map(skill => skill.label);
			const skillsCheck = skills.some(skill => skill === undefined);
			const englishLevel = data.englishLevel.label;

			if (!skillsCheck && englishLevel) {
				const resultData = {
					...storedJobInfo,
					skills: skills as string[],
					englishLevel,
					otherRequirenments: data.otherRequirenments,
				};

				await createJob(resultData);
			}
		} catch {
			toast.error(SERVER_ERROR_MESSAGE);
		}
	};

	useEffect(() => {
		if (isSuccess) {
			dispatch(resetState());
			navigate(EMPLOYER_JOBS_PAGE);
		}

		if (isError) {
			toast.error(SERVER_ERROR_MESSAGE);
		}
	}, [isSuccess, isError]);

	return {
		isLoading,
		onSubmit,
	};
};
