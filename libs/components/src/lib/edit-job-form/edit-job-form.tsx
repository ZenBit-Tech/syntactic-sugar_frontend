import { Controller, useForm } from "react-hook-form";
import {
	Container,
	Form,
	ErrorsHandlerWrapper,
	Input,
	JobPostingTextArea,
	SelectElement,
	StyledSpan,
	JobPostingLabel,
	selectDefaultArray,
	setRemoteObject,
	setRemoteArray,
	useJobPostingFirstFormHook,
	useJobPostingSecondFormHook,
} from "@freelance/components";
import { SelectOptions, useOptions } from "utils/select-options/options";
import { useEditJobHook } from "./edit-job-formHooks";

export interface IEditJobProps {
	jobId: string;
}

export interface IEditJobForm {
	title: string;
	description: string;
	countries: SelectOptions[];
	category: SelectOptions;
	position: string;
	employmentType: SelectOptions;
	availableAmountOfHours: SelectOptions;
	workExperience: SelectOptions;
	hourRate: SelectOptions;
}

export function EditJobForm({ jobId }: IEditJobProps) {
	const { inputLabel, descriptionLabel } = useJobPostingFirstFormHook();
	const { countreisLabel, categoryLabel, fieldRequired } = useJobPostingSecondFormHook();
	const { countries, categories, hoursAmount, hourRate, employmentType, workExperience } =
		useOptions();
	const { jobById, isLoading } = useEditJobHook(jobId);
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IEditJobForm>();

	console.log(setRemoteArray(jobById?.countries, countries));

	return (
		<Container modalEditJob>
			{!isLoading && (
				<>
					<h1>Welcome to EditJob!</h1>
					<Form id="editForm">
						<JobPostingLabel>{inputLabel}</JobPostingLabel>
						<ErrorsHandlerWrapper positionRight={0} width={10}>
							<Input
								defaultValue={jobById?.title}
								{...register("title")}
								type="text"
								autoComplete="off"
							/>
							{errors?.title && (
								<StyledSpan fontSize="sm" type="validation">
									<strong>{errors?.title?.message}</strong>
								</StyledSpan>
							)}
						</ErrorsHandlerWrapper>
						<JobPostingLabel>{descriptionLabel}</JobPostingLabel>
						<ErrorsHandlerWrapper positionRight={0} width={10}>
							<JobPostingTextArea
								defaultValue={jobById?.description}
								{...register("description")}
								rows={5}
								maxLength={600}
							/>
							{errors?.description && (
								<StyledSpan fontSize="sm" type="validation">
									<strong>{errors?.description?.message}</strong>
								</StyledSpan>
							)}
						</ErrorsHandlerWrapper>
						<JobPostingLabel>{countreisLabel}</JobPostingLabel>
						<ErrorsHandlerWrapper positionRight={-20} width={15} wrapperWidth={80}>
							<Controller
								name="countries"
								defaultValue={setRemoteArray(jobById?.countries, countries)}
								control={control}
								rules={{ required: fieldRequired }}
								render={({ field }) => (
									<SelectElement
										options={countries}
										{...field}
										isSearchable
										isMulti
										classNamePrefix="react-select"
									/>
								)}
							/>
							{errors?.countries && (
								<StyledSpan fontSize="sm" type="validation">
									<strong>{errors?.countries?.message}</strong>
								</StyledSpan>
							)}
						</ErrorsHandlerWrapper>
						<JobPostingLabel>{categoryLabel}</JobPostingLabel>
						<ErrorsHandlerWrapper positionRight={-20} width={15} wrapperWidth={80}>
							<Controller
								name="category"
								defaultValue={setRemoteObject(jobById?.category, categories)}
								control={control}
								rules={{ required: fieldRequired }}
								render={({ field }) => (
									<SelectElement
										options={categories}
										{...field}
										isSearchable
										isClearable
										classNamePrefix="react-select"
									/>
								)}
							/>
							{errors?.category && (
								<StyledSpan fontSize="sm" type="validation">
									<strong>
										{errors?.category?.label ? errors?.category?.label.message : fieldRequired}
									</strong>
								</StyledSpan>
							)}
						</ErrorsHandlerWrapper>
					</Form>
				</>
			)}
		</Container>
	);
}

export default EditJobForm;
