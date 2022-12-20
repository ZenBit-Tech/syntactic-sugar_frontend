import { useEffect } from "react";
import { toast } from "react-toastify";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { resetState, getStoredJobInfo, useCreateJobMutation } from "redux/newJobPosting";
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

	const onSubmit: SubmitHandler<IJobPostingThirdForm> = async data => {
		try {
			const resultData = {
				...storedJobInfo,
				skills: data.skills.map(skill => skill.label),
				englishLevel: data.englishLevel.label,
				otherRequirenments: data.otherRequirenments,
			};

			await createJob(resultData);
		} catch {
			toast.error("Something went wrong");
		}
	};

	useEffect(() => {
		if (isSuccess) {
			dispatch(resetState());
			navigate(EMPLOYER_JOBS_PAGE);
		}

		if (isError) {
			toast.error("Something went wrong");
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
