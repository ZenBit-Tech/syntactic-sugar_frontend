import { useEffect } from "react";
import { SubmitHandler, UseFormReset } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { selectDefaultObject, setRemoteArray, setRemoteObject } from "@freelance/components";
import {
	IEduResponse,
	IResponse,
	IWorkHistoryResponse,
	useUpdateFreelancerProfileMutation,
} from "redux/createFreelancer/freelancer-pageApi";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { useOptions } from "utils/select-options/options";
import { IEditFreelancerForm } from "./edit-freelancer-form";

interface IUseEditFreelancerFormParams {
	imageUrl: string;
	reset: UseFormReset<IEditFreelancerForm>;
	isFetching: boolean;
	isDirty: boolean;
	isFormChange: boolean;
	education?: IEduResponse[];
	workHistory?: IWorkHistoryResponse[];
	profile?: IResponse;
	setIsFormChange: React.Dispatch<React.SetStateAction<boolean>>;
	setIsImageChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUseEditFreelancerForm {
	onSubmit: SubmitHandler<IEditFreelancerForm>;
	isLoading: boolean;
}

export const useEditFreelancerForm = ({
	imageUrl,
	reset,
	isFetching,
	isDirty,
	isFormChange,
	setIsFormChange,
	setIsImageChanged,
	profile,
	education,
	workHistory,
}: IUseEditFreelancerFormParams): IUseEditFreelancerForm => {
	const { t } = useTranslation();
	const [updateFreelancerProfile, { isLoading, isSuccess, isError }] =
		useUpdateFreelancerProfileMutation();
	const {
		countries,
		categories,
		skills,
		employmentType,
		hourRate,
		hoursAmount,
		workExperience,
		englishLevel,
	} = useOptions();

	const onSubmit: SubmitHandler<IEditFreelancerForm> = async data => {
		try {
			const newFreelancer = {
				fullName: data.fullName,
				category: data.category.label || "",
				position: data.position,
				skills: data.skills.map(skill => skill.label || ""),
				employmentType: data.employmentType.label || "",
				country: data.country.label || "",
				hourRate: data.hourRate.label || "",
				availableAmountOfHours: data.availableAmountOfHours.label || "",
				workExperience: data.workExperience.label || "",
				englishLevel: data.englishLevel.label || "",
				education: data.education.map(item => {
					return {
						institute: item.institute,
						occupation: item.occupation,
						period: item.period,
					};
				}),
				workHistory: data.workHistory.map(item => {
					return {
						company: item.company,
						workPosition: item.workPosition,
						period: item.period,
					};
				}),
				otherExperience: data.otherExperience,
				image: imageUrl === DEFAULT_IMAGE ? "" : imageUrl,
			};

			await updateFreelancerProfile(newFreelancer);
			setIsFormChange(false);
			setIsImageChanged(false);
		} catch {
			toast.error(t("serverErrorMessage"));
		}
	};

	useEffect(() => {
		isDirty && setIsFormChange(true);
	}, [isDirty, setIsFormChange]);

	useEffect(() => {
		!isFormChange && !isFetching && reset();
	}, [isFormChange, reset, isFetching]);

	useEffect(() => {
		reset({
			category: setRemoteObject(profile?.category, categories),
			skills: setRemoteArray(profile?.skills, skills),
			employmentType: selectDefaultObject(profile?.employmentType, employmentType),
			country: setRemoteObject(profile?.country, countries),
			hourRate: selectDefaultObject(profile?.hourRate, hourRate),
			availableAmountOfHours: selectDefaultObject(profile?.availableAmountOfHours, hoursAmount),
			workExperience: selectDefaultObject(profile?.workExperience, workExperience),
			englishLevel: selectDefaultObject(profile?.englishLevel, englishLevel),
			education,
			workHistory,
		});
	}, [education, reset, workHistory, profile]);

	useEffect(() => {
		isSuccess && toast.success(t("dashboard.successEdit"));
		isError && toast.error(t("serverErrorMessage"));
	}, [isError, isSuccess, t]);

	return {
		onSubmit,
		isLoading,
	};
};
