import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { useThirdFormSchema } from "utils/validations/newJobPostingSchemas";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";
import { useJobLabelAndPlaceholder } from "utils/constants/jobs-labels-and-placeholders";
import { useJobPostingThirdFormHook } from "./job-posting-third-formHooks";

export function JobPostingThirdForm({ page, textButtonHandler }: IJobPostingThirdFormProps) {
	const schema = useThirdFormSchema();
	const {
		skills: storedSkills,
		englishLevel: storedEnglishLevel,
		otherRequirenments,
	} = useAppSelector(getStoredJobInfo);
	const { FIELD_REQUIRED } = useJobsValidationErrorMessages();
	const {
		JOB_SKILLS_PLACEHOLDER,
		JOB_ENGLISH_LEVEL_PLACEHOLDER,
		JOB_OTHER_REQUIRENMENTS_PLACEHOLDER,
		JOB_SKILLS_LABEL,
		JOB_ENGLISH_LEVEL_LABEL,
		JOB_OTHER_REQUIRENMENTS_LABEL,
	} = useJobLabelAndPlaceholder();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<IJobPostingThirdForm>({ resolver: yupResolver(schema) });
	const { isLoading, onSubmit } = useJobPostingThirdFormHook();
	const { skills, englishLevel } = useOptions();

	useEffect(() => {
		textButtonHandler(isLoading);
	}, [isLoading, textButtonHandler]);

	return (
		<JobPostingGridForm id={page} onSubmit={handleSubmit(onSubmit)} justifyItems="start">
			<IncreasedFieldWrapper gridRow={1} typeOfLength="half">
				<JobPostingLabel>{JOB_SKILLS_LABEL}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<Controller
						name="skills"
						defaultValue={selectDefaultArray(storedSkills, skills)}
						control={control}
						render={({ field }) => (
							<SelectElement
								options={skills}
								{...field}
								placeholder={JOB_SKILLS_PLACEHOLDER}
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
				<JobPostingLabel>{JOB_ENGLISH_LEVEL_LABEL}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<Controller
						name="englishLevel"
						defaultValue={selectDefaultObject(storedEnglishLevel, englishLevel)}
						control={control}
						render={({ field }) => (
							<SelectElement
								options={englishLevel}
								{...field}
								placeholder={JOB_ENGLISH_LEVEL_PLACEHOLDER}
								isSearchable
								isClearable
								classNamePrefix="react-select"
							/>
						)}
					/>
					{errors?.englishLevel && (
						<StyledSpan fontSize="sm" type="validation">
							<strong>
								{errors?.englishLevel?.label ? errors?.englishLevel?.label.message : FIELD_REQUIRED}
							</strong>
						</StyledSpan>
					)}
				</ErrorsHandlerWrapper>
			</FieldWrapper>
			<IncreasedFieldWrapper gridRow="auto" typeOfLength="full">
				<JobPostingLabel>{JOB_OTHER_REQUIRENMENTS_LABEL}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<JobPostingTextArea
						defaultValue={otherRequirenments}
						{...register("otherRequirenments")}
						rows={5}
						maxLength={600}
						placeholder={JOB_OTHER_REQUIRENMENTS_PLACEHOLDER}
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
