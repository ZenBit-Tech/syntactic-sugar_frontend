import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	Container,
	GridContainer,
	GridItem,
	Form,
	ErrorsHandlerWrapper,
	Input,
	JobPostingTextArea,
	SelectElement,
	StyledSpan,
	StyledButton,
	StyledTitle,
	ButtonContainer,
	JobPostingLabel,
	selectDefaultObject,
	setRemoteObject,
	setRemoteArray,
} from "@freelance/components";
import { SelectOptions, useOptions } from "utils/select-options/options";
import { useEditJobFormSchema } from "utils/validations";
import { useJobLabelAndPlaceholder } from "utils/constants/jobs-labels-and-placeholders";
import { useJobsValidationErrorMessages } from "utils/constants/jobs-validation-error-messages";
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
	skills: SelectOptions[];
	englishLevel: SelectOptions;
	otherRequirenments: string;
}

export function EditJobForm({ jobId }: IEditJobProps) {
	const {
		JOB_TITLE_LABEL,
		JOB_DESCRIPTION_LABEL,
		JOB_COUNTRIES_LABEL,
		JOB_CATEGORY_LABEL,
		JOB_POSITION_LABEL,
		JOB_EMPLOYMENT_TYPE_LABEL,
		JOB_AMOUNT_HOURS_LABEL,
		JOB_WORK_EXPERIANCE_LABEL,
		JOB_HOUR_RATE_LABEL,
		JOB_SKILLS_LABEL,
		JOB_ENGLISH_LEVEL_LABEL,
		JOB_OTHER_REQUIRENMENTS_LABEL,
	} = useJobLabelAndPlaceholder();
	const { FIELD_REQUIRED } = useJobsValidationErrorMessages();
	const {
		countries,
		categories,
		hoursAmount,
		hourRate,
		employmentType,
		workExperience,
		skills,
		englishLevel,
	} = useOptions();
	const { jobById, onSubmit, saveChanges, pendingText, editJobTitle, isLoading, isPendingSaving } =
		useEditJobHook(jobId);
	const schema = useEditJobFormSchema();
	const {
		control,
		register,
		handleSubmit,
		formState: { errors, isDirty },
	} = useForm<IEditJobForm>({ resolver: yupResolver(schema) });

	return (
		<Container modalEditJob>
			{!isLoading && (
				<>
					<StyledTitle tag="h1" fontWeight={700} fontSize="lg">
						{editJobTitle}
					</StyledTitle>
					<Form id="editForm" onSubmit={handleSubmit(onSubmit)}>
						<JobPostingLabel>{JOB_TITLE_LABEL}</JobPostingLabel>
						<ErrorsHandlerWrapper positionRight={4} width={12}>
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
						<JobPostingLabel>{JOB_DESCRIPTION_LABEL}</JobPostingLabel>
						<ErrorsHandlerWrapper positionRight={4} width={12}>
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
						<JobPostingLabel>{JOB_COUNTRIES_LABEL}</JobPostingLabel>
						<ErrorsHandlerWrapper positionRight={-20} width={15} wrapperWidth={80}>
							<Controller
								name="countries"
								defaultValue={setRemoteArray(jobById?.countries, countries)}
								control={control}
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
						<GridContainer columns={2} width={89}>
							<GridItem>
								<JobPostingLabel>{JOB_CATEGORY_LABEL}</JobPostingLabel>
								<ErrorsHandlerWrapper positionRight={-24} width={20} wrapperWidth={80}>
									<Controller
										name="category"
										defaultValue={setRemoteObject(jobById?.category, categories)}
										control={control}
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
												{errors?.category?.label ? errors?.category?.label.message : FIELD_REQUIRED}
											</strong>
										</StyledSpan>
									)}
								</ErrorsHandlerWrapper>
							</GridItem>
							<GridItem>
								<JobPostingLabel>{JOB_POSITION_LABEL}</JobPostingLabel>
								<ErrorsHandlerWrapper positionRight={1} width={16}>
									<Input defaultValue={jobById?.position} {...register("position")} type="text" />
									{errors?.position && (
										<StyledSpan fontSize="sm" type="validation">
											<strong>{errors?.position?.message}</strong>
										</StyledSpan>
									)}
								</ErrorsHandlerWrapper>
							</GridItem>
							<GridItem>
								<JobPostingLabel>{JOB_EMPLOYMENT_TYPE_LABEL}</JobPostingLabel>
								<ErrorsHandlerWrapper positionRight={-24} width={20} wrapperWidth={80}>
									<Controller
										name="employmentType"
										defaultValue={selectDefaultObject(jobById?.employmentType, employmentType)}
										control={control}
										render={({ field }) => (
											<SelectElement
												options={employmentType}
												{...field}
												isSearchable
												isClearable
												classNamePrefix="react-select"
											/>
										)}
									/>
									{errors?.employmentType && (
										<StyledSpan fontSize="sm" type="validation">
											<strong>
												{errors?.employmentType?.label
													? errors?.employmentType?.label.message
													: FIELD_REQUIRED}
											</strong>
										</StyledSpan>
									)}
								</ErrorsHandlerWrapper>
							</GridItem>
							<GridItem>
								<JobPostingLabel>{JOB_AMOUNT_HOURS_LABEL}</JobPostingLabel>
								<ErrorsHandlerWrapper positionRight={-24} width={20} wrapperWidth={80}>
									<Controller
										name="availableAmountOfHours"
										defaultValue={selectDefaultObject(jobById?.availableAmountOfHours, hoursAmount)}
										control={control}
										render={({ field }) => (
											<SelectElement
												options={hoursAmount}
												{...field}
												isSearchable
												isClearable
												classNamePrefix="react-select"
											/>
										)}
									/>
									{errors?.availableAmountOfHours && (
										<StyledSpan fontSize="sm" type="validation">
											<strong>
												{errors?.availableAmountOfHours?.label
													? errors?.availableAmountOfHours?.label.message
													: FIELD_REQUIRED}
											</strong>
										</StyledSpan>
									)}
								</ErrorsHandlerWrapper>
							</GridItem>
							<GridItem>
								<JobPostingLabel>{JOB_WORK_EXPERIANCE_LABEL}</JobPostingLabel>
								<ErrorsHandlerWrapper positionRight={-24} width={20} wrapperWidth={80}>
									<Controller
										name="workExperience"
										defaultValue={selectDefaultObject(jobById?.workExperience, workExperience)}
										control={control}
										render={({ field }) => (
											<SelectElement
												options={workExperience}
												{...field}
												isSearchable
												isClearable
												classNamePrefix="react-select"
											/>
										)}
									/>
									{errors?.workExperience && (
										<StyledSpan fontSize="sm" type="validation">
											<strong>
												{errors?.workExperience?.label
													? errors?.workExperience?.label.message
													: FIELD_REQUIRED}
											</strong>
										</StyledSpan>
									)}
								</ErrorsHandlerWrapper>
							</GridItem>
							<GridItem>
								<JobPostingLabel>{JOB_HOUR_RATE_LABEL}</JobPostingLabel>
								<ErrorsHandlerWrapper positionRight={-24} width={20} wrapperWidth={80}>
									<Controller
										name="hourRate"
										defaultValue={selectDefaultObject(jobById?.hourRate, hourRate)}
										control={control}
										render={({ field }) => (
											<SelectElement
												options={hourRate}
												{...field}
												isSearchable
												isClearable
												classNamePrefix="react-select"
											/>
										)}
									/>
									{errors?.hourRate && (
										<StyledSpan fontSize="sm" type="validation">
											<strong>
												{errors?.hourRate?.label ? errors?.hourRate?.label.message : FIELD_REQUIRED}
											</strong>
										</StyledSpan>
									)}
								</ErrorsHandlerWrapper>
							</GridItem>
						</GridContainer>
						<JobPostingLabel>{JOB_SKILLS_LABEL}</JobPostingLabel>
						<ErrorsHandlerWrapper positionRight={-20} width={15} wrapperWidth={80}>
							<Controller
								name="skills"
								defaultValue={setRemoteArray(jobById?.skills, skills)}
								control={control}
								render={({ field }) => (
									<SelectElement
										options={skills}
										{...field}
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
						<JobPostingLabel>{JOB_ENGLISH_LEVEL_LABEL}</JobPostingLabel>
						<ErrorsHandlerWrapper positionRight={-20} width={15} wrapperWidth={80}>
							<Controller
								name="englishLevel"
								defaultValue={selectDefaultObject(jobById?.englishLevel, englishLevel)}
								control={control}
								render={({ field }) => (
									<SelectElement
										options={englishLevel}
										{...field}
										isSearchable
										isClearable
										classNamePrefix="react-select"
									/>
								)}
							/>
							{errors?.englishLevel && (
								<StyledSpan fontSize="sm" type="validation">
									<strong>
										{errors?.englishLevel?.label
											? errors?.englishLevel?.label.message
											: FIELD_REQUIRED}
									</strong>
								</StyledSpan>
							)}
						</ErrorsHandlerWrapper>
						<JobPostingLabel>{JOB_OTHER_REQUIRENMENTS_LABEL}</JobPostingLabel>
						<ErrorsHandlerWrapper positionRight={4} width={12}>
							<JobPostingTextArea
								defaultValue={jobById?.otherRequirenments}
								{...register("otherRequirenments")}
								rows={5}
								maxLength={600}
							/>
							{errors?.otherRequirenments && (
								<StyledSpan fontSize="sm" type="validation">
									<strong>{errors?.otherRequirenments?.message}</strong>
								</StyledSpan>
							)}
						</ErrorsHandlerWrapper>
						<ButtonContainer align="center">
							<StyledButton
								type="submit"
								buttonSize="sm"
								fontSize="lg"
								buttonColor={"redGradient"}
								disabled={isPendingSaving || !isDirty}
							>
								{isPendingSaving ? pendingText : saveChanges}
							</StyledButton>
						</ButtonContainer>
					</Form>
				</>
			)}
		</Container>
	);
}

export default EditJobForm;
