import { useForm, Controller } from "react-hook-form";
import { englishLevel, skills } from "utils/select-options/options";
import {
	IJobPostingFormProps,
	IJobPostingThirdForm,
	JobPostingGridForm,
	IncreasedFieldWrapper,
	FieldWrapper,
	JobPostingLabel,
	ErrorsHandlerWrapper,
	SelectElement,
	JobPostingTextArea,
	StyledSpan,
} from "@freelance/components";
import { useJobPostingThirdFormHook } from "./job-posting-third-formHooks";

export function JobPostingThirdForm({ page }: IJobPostingFormProps) {
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
		onSubmit,
	} = useJobPostingThirdFormHook();

	return (
		<JobPostingGridForm id={page} onSubmit={handleSubmit(onSubmit)} justifyItems="start">
			<IncreasedFieldWrapper gridRow={1} typeOfLength="half">
				<JobPostingLabel>{skillsLabel}</JobPostingLabel>
				<ErrorsHandlerWrapper positionRight={-20} width={15}>
					<Controller
						name="skills"
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
						control={control}
						rules={{ required: fieldRequired }}
						render={({ field }) => (
							<SelectElement
								options={englishLevel}
								{...field}
								placeholder={englishLevelPlaceholder}
								isSearchable
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
