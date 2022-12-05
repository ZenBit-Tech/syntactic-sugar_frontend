import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useJobPostingFirstFormHook } from "./job-posting-first-formHooks";
import {
	IJobPostingFormProps,
	IJobPostingFirstForm,
	Form,
	StyledSpan,
	Input,
	JobPostingTextArea,
	JobPostingLabel,
} from "@freelance/components";
import { useFirstFormSchema } from "utils/validations/newJobPostingSchemas";
import { FirstFormInputWrapper } from "./job-posting-first-form.styled";

export function JobPostingFirstForm({ page }: IJobPostingFormProps) {
	const schema = useFirstFormSchema();
	const { jobTitlePlaceholder, jobDescriptionPlaceholder, inputLabel, descriptionLabel, onSubmit } =
		useJobPostingFirstFormHook();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IJobPostingFirstForm>({
		resolver: yupResolver(schema),
	});

	return (
		<Form id={page} onSubmit={handleSubmit(onSubmit)}>
			<JobPostingLabel>{inputLabel}</JobPostingLabel>
			<FirstFormInputWrapper positionRight={0} width={10}>
				<Input
					{...register("jobTitle")}
					type="text"
					placeholder={jobTitlePlaceholder}
					autoComplete="off"
				/>
				{errors?.jobTitle && (
					<StyledSpan fontSize="sm" type="validation">
						<strong>{errors?.jobTitle?.message}</strong>
					</StyledSpan>
				)}
			</FirstFormInputWrapper>
			<JobPostingLabel>{descriptionLabel}</JobPostingLabel>
			<FirstFormInputWrapper positionRight={0} width={10}>
				<JobPostingTextArea
					{...register("jobDescription")}
					rows={10}
					maxLength={600}
					placeholder={jobDescriptionPlaceholder}
				/>
				{errors?.jobDescription && (
					<StyledSpan fontSize="sm" type="validation">
						<strong>{errors?.jobDescription?.message}</strong>
					</StyledSpan>
				)}
			</FirstFormInputWrapper>
		</Form>
	);
}

export default JobPostingFirstForm;
