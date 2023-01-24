import { useTranslation } from "react-i18next";
import { Popover } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Control, FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import {
	GridContainer,
	StyledTitle,
	ErrorsHandlerWrapper,
	Input,
	StyledSpan,
	IEditFreelancerForm,
	ButtonContainer,
	StyledButton,
} from "@freelance/components";
import { useFreelancerEducationEditForm } from "./freelancer-education-edit-formHook";

export interface FreelancerEducationEditFormProps {
	register: UseFormRegister<IEditFreelancerForm>;
	control: Control<IEditFreelancerForm>;
	errors: Partial<FieldErrorsImpl<IEditFreelancerForm>>;
}

export function FreelancerEducationEditForm({
	register,
	errors,
	control,
}: FreelancerEducationEditFormProps) {
	const { t } = useTranslation();
	const { educationFields, remove, append } = useFreelancerEducationEditForm({ control });

	return (
		<GridContainer gap={10}>
			<StyledTitle tag="h2" fontSize="md" fontWeight={500}>
				{t("freelancer.createProfile.educationLabel")}
			</StyledTitle>
			<GridContainer as="ul" gap={10}>
				{educationFields.map((educationField, index) => (
					<GridContainer as="li" key={educationField.id} gap={10}>
						<ErrorsHandlerWrapper positionRight={-21} width={18}>
							<Input
								id="institute"
								{...register(`education.${index}.institute` as const)}
								type="text"
								autoComplete="off"
								placeholder={t("freelancer.createProfile.institutePlaceholder")}
								width={100}
							/>
							{errors?.education?.[index]?.institute && (
								<StyledSpan fontSize="sm" type="validation">
									<strong>{errors?.education?.[index]?.institute?.message}</strong>
								</StyledSpan>
							)}
						</ErrorsHandlerWrapper>
						<ErrorsHandlerWrapper positionRight={-21} width={18}>
							<Input
								id="occupation"
								{...register(`education.${index}.occupation` as const)}
								type="text"
								autoComplete="off"
								placeholder={t("freelancer.createProfile.occupationPlaceholder")}
								width={100}
							/>
							{errors?.education?.[index]?.occupation && (
								<StyledSpan fontSize="sm" type="validation">
									<strong>{errors?.education?.[index]?.occupation?.message}</strong>
								</StyledSpan>
							)}
						</ErrorsHandlerWrapper>
						<ErrorsHandlerWrapper positionRight={-21} width={18}>
							<Input
								id="period"
								{...register(`education.${index}.period` as const)}
								type="text"
								autoComplete="off"
								placeholder={t("freelancer.createProfile.periodPlaceholder")}
								width={100}
							/>
							{errors?.education?.[index]?.period && (
								<StyledSpan fontSize="sm" type="validation">
									<strong>{errors?.education?.[index]?.period?.message}</strong>
								</StyledSpan>
							)}
						</ErrorsHandlerWrapper>
						<ButtonContainer align="right">
							<Popover placement="right" content={t("removeButton")}>
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
							</Popover>
						</ButtonContainer>
					</GridContainer>
				))}
			</GridContainer>
			<ButtonContainer align="right">
				<Popover placement="right" content={t("addButton")}>
					<StyledButton
						type="button"
						iconButton
						buttonSize="sm"
						fontSize="lg"
						buttonColor={"redGradient"}
						onClick={() => append({ institute: "", occupation: "", period: "" })}
					>
						<PlusOutlined />
					</StyledButton>
				</Popover>
			</ButtonContainer>
		</GridContainer>
	);
}

export default FreelancerEducationEditForm;
