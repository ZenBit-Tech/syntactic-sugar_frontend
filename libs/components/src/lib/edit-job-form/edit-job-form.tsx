import { Controller, useForm } from "react-hook-form";
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
	ButtonContainer,
	JobPostingLabel,
	selectDefaultObject,
	setRemoteObject,
	setRemoteArray,
	useJobPostingFirstFormHook,
	useJobPostingSecondFormHook,
	useJobPostingThirdFormHook,
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
	skills: SelectOptions[];
	englishLevel: SelectOptions;
	otherRequirenments: string;
}

export function EditJobForm({ jobId }: IEditJobProps) {
	const { inputLabel, descriptionLabel } = useJobPostingFirstFormHook();
	const {
		countreisLabel,
		categoryLabel,
		positionLabel,
		employmentTypeLabel,
		hoursAmountLabel,
		workExperienceLabel,
		hourRateLabel,
		fieldRequired,
	} = useJobPostingSecondFormHook();
	const { skillsLabel, englishLevelLabel, otherRequirenmentsLabel } = useJobPostingThirdFormHook();
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
	const { jobById, onSubmit, saveChanges, pendingText, isLoading, isPendingSaving } =
		useEditJobHook(jobId);
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IEditJobForm>();

	return (
		<Container modalEditJob>
			{!isLoading && (
				<>
					<h1>Welcome to EditJob!</h1>
					<Form id="editForm" onSubmit={handleSubmit(onSubmit)}>
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
						<GridContainer columns={2}>
							<GridItem>
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
							</GridItem>
							<GridItem>
								<JobPostingLabel>{positionLabel}</JobPostingLabel>
								<ErrorsHandlerWrapper positionRight={-20} width={15}>
									<Input
										defaultValue={jobById?.position}
										{...register("position", { required: fieldRequired })}
										type="text"
									/>
									{errors?.position && (
										<StyledSpan fontSize="sm" type="validation">
											<strong>{errors?.position?.message}</strong>
										</StyledSpan>
									)}
								</ErrorsHandlerWrapper>
							</GridItem>
							<GridItem>
								<JobPostingLabel>{employmentTypeLabel}</JobPostingLabel>
								<ErrorsHandlerWrapper positionRight={-20} width={15} wrapperWidth={80}>
									<Controller
										name="employmentType"
										defaultValue={selectDefaultObject(jobById?.employmentType, employmentType)}
										control={control}
										rules={{ required: fieldRequired }}
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
													: fieldRequired}
											</strong>
										</StyledSpan>
									)}
								</ErrorsHandlerWrapper>
							</GridItem>
							<GridItem>
								<JobPostingLabel>{hoursAmountLabel}</JobPostingLabel>
								<ErrorsHandlerWrapper positionRight={-20} width={15} wrapperWidth={80}>
									<Controller
										name="availableAmountOfHours"
										defaultValue={selectDefaultObject(jobById?.availableAmountOfHours, hoursAmount)}
										control={control}
										rules={{ required: fieldRequired }}
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
													: fieldRequired}
											</strong>
										</StyledSpan>
									)}
								</ErrorsHandlerWrapper>
							</GridItem>
							<GridItem>
								<JobPostingLabel>{workExperienceLabel}</JobPostingLabel>
								<ErrorsHandlerWrapper positionRight={-20} width={15} wrapperWidth={80}>
									<Controller
										name="workExperience"
										defaultValue={selectDefaultObject(jobById?.workExperience, workExperience)}
										control={control}
										rules={{ required: fieldRequired }}
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
													: fieldRequired}
											</strong>
										</StyledSpan>
									)}
								</ErrorsHandlerWrapper>
							</GridItem>
							<GridItem>
								<JobPostingLabel>{hourRateLabel}</JobPostingLabel>
								<ErrorsHandlerWrapper positionRight={-20} width={15} wrapperWidth={80}>
									<Controller
										name="hourRate"
										defaultValue={selectDefaultObject(jobById?.hourRate, hourRate)}
										control={control}
										rules={{ required: fieldRequired }}
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
												{errors?.hourRate?.label ? errors?.hourRate?.label.message : fieldRequired}
											</strong>
										</StyledSpan>
									)}
								</ErrorsHandlerWrapper>
							</GridItem>
						</GridContainer>
						<JobPostingLabel>{skillsLabel}</JobPostingLabel>
						<ErrorsHandlerWrapper positionRight={-20} width={15} wrapperWidth={80}>
							<Controller
								name="skills"
								defaultValue={setRemoteArray(jobById?.skills, skills)}
								control={control}
								rules={{ required: fieldRequired }}
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
						<JobPostingLabel>{englishLevelLabel}</JobPostingLabel>
						<ErrorsHandlerWrapper positionRight={-20} width={15} wrapperWidth={80}>
							<Controller
								name="englishLevel"
								defaultValue={selectDefaultObject(jobById?.englishLevel, englishLevel)}
								control={control}
								rules={{ required: fieldRequired }}
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
											: fieldRequired}
									</strong>
								</StyledSpan>
							)}
						</ErrorsHandlerWrapper>
						<JobPostingLabel>{otherRequirenmentsLabel}</JobPostingLabel>
						<ErrorsHandlerWrapper positionRight={0} width={15}>
							<JobPostingTextArea
								defaultValue={jobById?.otherRequirenments}
								{...register("otherRequirenments", { required: fieldRequired })}
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
								disabled={isPendingSaving}
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
