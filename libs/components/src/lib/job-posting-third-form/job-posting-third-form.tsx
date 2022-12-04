import { useForm, Controller } from "react-hook-form";
import { englishLevel, skills } from "utils/select-options/options";
import {
	IJobPostingFormProps,
	IJobPostingThirdForm,
	JobPostingGridForm,
	IncreasedFieldWrapper,
	FieldWrapper,
	JobPostingLabel,
	InputWrapper,
	SelectElement,
	JobPostingTextArea,
} from "@freelance/components";
import { useJobPostingThirdFormHook } from "./job-posting-third-formHooks";

export function JobPostingThirdForm({ page }: IJobPostingFormProps) {
	const { register, handleSubmit, control } = useForm<IJobPostingThirdForm>();
	const {
		skillsLabel,
		skillsPlaceholder,
		englishLevelLabel,
		englishLevelPlaceholder,
		otherRequirenmentsLabel,
		otherRequirenmentsPlaceholder,
		onSubmit,
	} = useJobPostingThirdFormHook();

	return (
		<JobPostingGridForm id={page} onSubmit={handleSubmit(onSubmit)} justifyItems="start">
			<IncreasedFieldWrapper gridRow={1} typeOfLength="half">
				<JobPostingLabel>{skillsLabel}</JobPostingLabel>
				<InputWrapper>
					<Controller
						name="skills"
						control={control}
						rules={{ required: true }}
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
				</InputWrapper>
			</IncreasedFieldWrapper>
			<FieldWrapper>
				<JobPostingLabel>{englishLevelLabel}</JobPostingLabel>
				<InputWrapper>
					<Controller
						name="englishLevel"
						control={control}
						rules={{ required: true }}
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
				</InputWrapper>
			</FieldWrapper>
			<IncreasedFieldWrapper gridRow="auto" typeOfLength="full">
				<JobPostingLabel>{otherRequirenmentsLabel}</JobPostingLabel>
				<InputWrapper>
					<JobPostingTextArea
						{...register("otherRequirenments", { required: true })}
						rows={10}
						maxLength={600}
						placeholder={otherRequirenmentsPlaceholder}
					/>
				</InputWrapper>
			</IncreasedFieldWrapper>
		</JobPostingGridForm>
	);
}

export default JobPostingThirdForm;
