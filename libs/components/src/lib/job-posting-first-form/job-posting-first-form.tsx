import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { useJobLabelAndPlaceholder } from "utils/constants/jobs-labels-and-placeholders";
import { getStoredJobInfo } from "redux/jobs";
import { useAppSelector } from "redux/hooks";
import { useJobPostingFirstFormHook } from "./job-posting-first-formHooks";
import { FirstFormInputWrapper } from "./job-posting-first-form.styled";

export function JobPostingFirstForm({ page }: IJobPostingFormProps) {
	const schema = useFirstFormSchema();
	const {
		JOB_TITLE_LABEL,
		JOB_TITLE_PLACEHOLDER,
		JOB_DESCRIPTION_LABEL,
		JOB_DESCRIPTION_PLACEHOLDER,
	} = useJobLabelAndPlaceholder();
	const { title, description } = useAppSelector(getStoredJobInfo);
	const { onSubmit } = useJobPostingFirstFormHook();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IJobPostingFirstForm>({
		resolver: yupResolver(schema),
	});

	return (
		<Form id={page} onSubmit={handleSubmit(onSubmit)}>
			<JobPostingLabel>{JOB_TITLE_LABEL}</JobPostingLabel>
			<FirstFormInputWrapper positionRight={0} width={10}>
				<Input
					defaultValue={title}
					{...register("title")}
					type="text"
					placeholder={JOB_TITLE_PLACEHOLDER}
					autoComplete="off"
				/>
				{errors?.title && (
					<StyledSpan fontSize="sm" type="validation">
						<strong>{errors?.title?.message}</strong>
					</StyledSpan>
				)}
			</FirstFormInputWrapper>
			<JobPostingLabel>{JOB_DESCRIPTION_LABEL}</JobPostingLabel>
			<FirstFormInputWrapper positionRight={0} width={10}>
				<JobPostingTextArea
					defaultValue={description}
					{...register("description")}
					rows={10}
					maxLength={600}
					placeholder={JOB_DESCRIPTION_PLACEHOLDER}
				/>
				{errors?.description && (
					<StyledSpan fontSize="sm" type="validation">
						<strong>{errors?.description?.message}</strong>
					</StyledSpan>
				)}
			</FirstFormInputWrapper>
		</Form>
	);
}

export default JobPostingFirstForm;
