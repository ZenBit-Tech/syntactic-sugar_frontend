import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { getStoredJobInfo } from "redux/jobs";
import { useAppSelector } from "redux/hooks";
import {
	IJobPostingThirdFormProps,
	IJobPostingThirdForm,
	JobPostingGridForm,
	IncreasedFieldWrapper,
	FieldWrapper,
	JobPostingLabel,
	ErrorsHandlerWrapper,
	SelectElement,
	JobPostingTextArea,
	StyledSpan,
	selectDefaultArray,
	selectDefaultObject,
} from "@freelance/components";
import { useOptions } from "utils/select-options/options";
import { useJobPostingThirdFormHook } from "./job-posting-third-formHooks";

export function JobPostingThirdForm({ page, textButtonHandler }: IJobPostingThirdFormProps) {
	const {
		skills: storedSkills,
		englishLevel: storedEnglishLevel,
		otherRequirenments,
	} = useAppSelector(getStoredJobInfo);
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<IJobPostingThirdForm>();
	const {
		skillsLabel,
		skillsPlaceholder,
		englishLevelLabel,
		englishLevelPlaceholder,
		otherRequirenmentsLabel,
		otherRequirenmentsPlaceholder,
		fieldRequired,
		isLoading,
		onSubmit,
	} = useJobPostingThirdFormHook();
	const { skills, englishLevel } = useOptions();

	useEffect(() => {
		textButtonHandler(isLoading);
	}, [isLoading]);

	return (
		<JobPostingGridForm id={page} onSubmit={handleSubmit(onSubmit)} justifyItems="start">
			<IncreasedFieldWrapper gridRow={1} typeOfLength="half">
				<JobPostingLabel>{skillsLabel}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<Controller
						name="skills"
						defaultValue={selectDefaultArray(storedSkills, skills)}
						control={control}
						rules={{ required: fieldRequired }}
						render={({ field }) => (
							<SelectElement
								options={skills}
								{...field}
								placeholder={skillsPlaceholder}
								isSearchable
								isMulti
								classNamePrefix="react-select"
							/>
						)}
					/>
					{errors?.skills && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>{errors?.skills?.message}</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
			</IncreasedFieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{englishLevelLabel}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<Controller
						name="englishLevel"
						defaultValue={selectDefaultObject(storedEnglishLevel, englishLevel)}
						control={control}
						rules={{ required: fieldRequired }}
						render={({ field }) => (
							<SelectElement
								options={englishLevel}
								{...field}
								placeholder={englishLevelPlaceholder}
								isSearchable
								isClearable
								classNamePrefix="react-select"
							/>
						)}
					/>
					{errors?.englishLevel && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>{errors?.englishLevel?.message}</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
			</FieldWrapper>
			<IncreasedFieldWrapper gridRow="auto" typeOfLength="full">
				<JobPostingLabel>{otherRequirenmentsLabel}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<JobPostingTextArea
						defaultValue={otherRequirenments}
						{...register("otherRequirenments", { required: fieldRequired })}
						rows={5}
						maxLength={600}
						placeholder={otherRequirenmentsPlaceholder}
					/>
					{errors?.otherRequirenments && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>{errors?.otherRequirenments?.message}</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
			</IncreasedFieldWrapper>
		</JobPostingGridForm>
	);
}

export default JobPostingThirdForm;
