import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useJobPostingFirstFormHook } from "./job-posting-first-formHooks";
import { Page, StyledSpan } from "@freelance/components";
import { IJobPostingFirstForm } from "./interfaces";
import { useFirstFormSchema } from "utils/validations/newJobPostingSchemas";
import {
	Form,
	JobPostingTextArea,
	FirstFormInput,
	InputWrapper,
	JobPostingLabel,
} from "./job-posting-first-form.styled";

/* eslint-disable-next-line */
interface JobPostingFirstFormProps {
	page: Page;
}

export function JobPostingFirstForm({ page }: JobPostingFirstFormProps) {
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
			<InputWrapper>
				<JobPostingLabel>{inputLabel}</JobPostingLabel>
				<FirstFormInput {...register("jobTitle")} type="text" placeholder={jobTitlePlaceholder} />
				{errors?.jobTitle && (
					<StyledSpan fontSize="sm" type="validation">
						<strong>{errors?.jobTitle?.message}</strong>
					</StyledSpan>
				)}
			</InputWrapper>
			<JobPostingLabel>{descriptionLabel}</JobPostingLabel>
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
		</Form>
	);
}

export default JobPostingFirstForm;
