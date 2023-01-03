import { useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { JobsInterface, useGetJobIdQuery, useUpdateJobByIdMutation } from "redux/jobs";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";
import { IEditJobForm } from "./edit-job-form";

interface IUseEditJobHook {
	jobById?: JobsInterface;
	onSubmit: SubmitHandler<IEditJobForm>;
	saveChanges: string;
	pendingText: string;
	editJobTitle: string;
	isLoading: boolean;
	isPendingSaving: boolean;
}

export const useEditJobHook = (jobId: string): IUseEditJobHook => {
	const { t } = useTranslation();
	const { SERVER_ERROR_MESSAGE } = useJobsValidationErrorMessages();
	const { data: jobById, isLoading } = useGetJobIdQuery(jobId);
	const [updateJobById, { isLoading: isPendingSaving, isSuccess, isError }] =
		useUpdateJobByIdMutation();

	const saveChanges: string = t("editJob.saveChanges");
	const pendingText: string = t("editJob.isPendingSaving");
	const editJobTitle: string = t("editJob.title");

	const onSubmit: SubmitHandler<IEditJobForm> = async data => {
		console.log(data);
		try {
			const countries = data.countries.map(country => country.label);
			const countriesCheck = countries.some(country => country === undefined);
			const skills = data.skills.map(skill => skill.label);
			const skillsCheck = skills.some(skill => skill === undefined);

			if (!countriesCheck && !skillsCheck) {
				const resultData = {
					id: jobId,
					title: data.title,
					description: data.description,
					countries: countries as string[],
					category: data.category.label,
					position: data.position,
					employmentType: data.employmentType.label,
					availableAmountOfHours: data.availableAmountOfHours.label,
					hourRate: data.hourRate.label,
					workExperience: data.workExperience.label,
					skills: skills as string[],
					englishLevel: data.englishLevel.label,
					otherRequirenments: data.otherRequirenments,
				};

				await updateJobById(resultData);
			}
		} catch {
			toast.error(SERVER_ERROR_MESSAGE);
		}
	};

	useEffect(() => {
		isSuccess && toast.success(t("editJob.savingSucceed"));
		isError && toast.error(SERVER_ERROR_MESSAGE);
	}, [isSuccess, isError, SERVER_ERROR_MESSAGE, t]);

	return {
		jobById,
		onSubmit,
		saveChanges,
		pendingText,
		editJobTitle,
		isLoading,
		isPendingSaving,
	};
};
