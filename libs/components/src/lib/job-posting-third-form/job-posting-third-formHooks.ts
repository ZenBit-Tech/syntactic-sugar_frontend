import { useEffect } from "react";
import { toast } from "react-toastify";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { resetState, getStoredJobInfo, useCreateJobMutation } from "redux/jobs";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { IJobPostingThirdForm, IUseJobPostingThirdForm } from "@freelance/components";
import { EMPLOYER_JOBS_PAGE } from "utils/constants/links";

export const useJobPostingThirdFormHook = (): IUseJobPostingThirdForm => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const storedJobInfo = useAppSelector(getStoredJobInfo);
	const navigate = useNavigate();
	const [createJob, { isLoading, isSuccess, isError }] = useCreateJobMutation();

	const skillsLabel: string = t("newJobPosting.thirdForm.skillsLabel");
	const skillsPlaceholder: string = t("newJobPosting.thirdForm.skillsPlaceholder");
	const englishLevelLabel: string = t("newJobPosting.thirdForm.englishLevelLabel");
	const englishLevelPlaceholder: string = t("newJobPosting.thirdForm.englishLevelPlaceholder");
	const otherRequirenmentsLabel: string = t("newJobPosting.thirdForm.otherRequirenmentsLabel");
	const otherRequirenmentsPlaceholder: string = t(
		"newJobPosting.thirdForm.otherRequirenmentsLabel",
	);
	const fieldRequired: string = t("newJobPosting.validation.messageFieldRequired");
	const serverErrorMessage = t("serverErrorMessage");

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
			toast.error(serverErrorMessage);
		}
	};

	useEffect(() => {
		if (isSuccess) {
			dispatch(resetState());
			navigate(EMPLOYER_JOBS_PAGE);
		}

		if (isError) {
			toast.error(serverErrorMessage);
		}
	}, [isSuccess, isError]);

	return {
		skillsLabel,
		skillsPlaceholder,
		englishLevelLabel,
		englishLevelPlaceholder,
		otherRequirenmentsLabel,
		otherRequirenmentsPlaceholder,
		fieldRequired,
		isLoading,
		onSubmit,
	};
};
