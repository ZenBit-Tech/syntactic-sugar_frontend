import { Control, FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
	GridContainer,
	StyledTitle,
	ErrorsHandlerWrapper,
	Input,
	StyledSpan,
	StyledButton,
	IEditFreelancerForm,
	ButtonContainer,
} from "@freelance/components";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { useFreelancerExperienceEditForm } from "./freelancer-experience-edit-formHook";

export interface FreelancerExperienceEditFormProps {
	register: UseFormRegister<IEditFreelancerForm>;
	control: Control<IEditFreelancerForm>;
	errors: Partial<FieldErrorsImpl<IEditFreelancerForm>>;
}

export function FreelancerExperienceEditForm({
	register,
	errors,
	control,
}: FreelancerExperienceEditFormProps) {
	const { t } = useTranslation();
	const { workHistoryFields, append, remove } = useFreelancerExperienceEditForm({ control });

	return (
		<GridContainer gap={10}>
			<StyledTitle tag="h2" fontSize="md" fontWeight={500}>
				{t("freelancer.createProfile.workHistoryLabel")}
			</StyledTitle>
			<GridContainer as="ul" gap={10}>
				{workHistoryFields.map((workHistoryField, index) => (
					<GridContainer as="li" key={workHistoryField.id} gap={10}>
						<ErrorsHandlerWrapper positionRight={-21} width={18}>
							<Input
								id="company"
								{...register(`workHistory.${index}.company` as const)}
								type="text"
								autoComplete="off"
								placeholder={t("freelancer.createProfile.companyPlaceholder")}
								width={100}
							/>
							{errors?.workHistory?.[index]?.company && (
								<StyledSpan fontSize="sm" type="validation">
									<strong>{errors?.workHistory?.[index]?.company?.message}</strong>
								</StyledSpan>
							)}
						</ErrorsHandlerWrapper>
						<ErrorsHandlerWrapper positionRight={-21} width={18}>
							<Input
								id="workPosition"
								{...register(`workHistory.${index}.workPosition` as const)}
								type="text"
								autoComplete="off"
								placeholder={t("freelancer.createProfile.positionPlaceholder")}
								width={100}
							/>
							{errors?.workHistory?.[index]?.workPosition && (
								<StyledSpan fontSize="sm" type="validation">
									<strong>{errors?.workHistory?.[index]?.workPosition?.message}</strong>
								</StyledSpan>
							)}
						</ErrorsHandlerWrapper>
						<ErrorsHandlerWrapper positionRight={-21} width={18}>
							<Input
								id="period"
								{...register(`workHistory.${index}.period` as const)}
								type="text"
								autoComplete="off"
								placeholder={t("freelancer.createProfile.periodPlaceholder")}
								width={100}
							/>
							{errors?.workHistory?.[index]?.period && (
								<StyledSpan fontSize="sm" type="validation">
									<strong>{errors?.workHistory?.[index]?.period?.message}</strong>
								</StyledSpan>
							)}
						</ErrorsHandlerWrapper>
						<ButtonContainer align="right">
							<StyledButton
								type="button"
								iconButton
								buttonSize="sm"
								fontSize="lg"
								buttonColor={"redGradient"}
								onClick={() => remove(index)}
							>
								<DeleteOutlined />
							</StyledButton>
						</ButtonContainer>
					</GridContainer>
				))}
			</GridContainer>
			<ButtonContainer align="right">
				<StyledButton
					type="button"
					iconButton
					buttonSize="sm"
					fontSize="lg"
					buttonColor={"redGradient"}
					onClick={() => append({ company: "", workPosition: "", period: "" })}
				>
					<PlusOutlined />
				</StyledButton>
			</ButtonContainer>
		</GridContainer>
	);
}

export default FreelancerExperienceEditForm;
