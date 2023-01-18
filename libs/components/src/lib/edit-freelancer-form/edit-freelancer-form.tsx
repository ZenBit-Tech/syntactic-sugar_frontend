import { useTranslation } from "react-i18next";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import {
	EditForm,
	ErrorsHandlerWrapper,
	Input,
	StyledSpan,
	SelectElement,
} from "@freelance/components";
import { SelectOptions, useOptions } from "utils/select-options/options";
import { Controller, useForm } from "react-hook-form";

export interface IEditFreelancerForm {
	fullName: string;
	category: SelectOptions;
	position: string;
	skills: SelectOptions[];
	employmentType: SelectOptions;
	country: SelectOptions;
	hourRate: SelectOptions;
	availableAmountOfHours: SelectOptions;
	workExperience: SelectOptions;
	englishLevel: SelectOptions;
	image: string;
}

export interface EditFreelancerFormProps {
	imageUrl: string;
	profile?: IResponse;
	isImageChanged: boolean;
	isFormChange: boolean;
	setIsFormChange: React.Dispatch<React.SetStateAction<boolean>>;
	setIsImageChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

export function EditFreelancerForm({
	profile,
	imageUrl,
	isImageChanged,
	isFormChange,
	setIsFormChange,
	setIsImageChanged,
}: EditFreelancerFormProps) {
	const { t } = useTranslation();
	const {
		countries,
		categories,
		skills,
		employmentType,
		hourRate,
		hoursAmount,
		workExperience,
		englishLevel,
	} = useOptions();
	const {
		handleSubmit,
		control,
		register,
		reset,
		formState: { errors, isDirty },
	} = useForm<IEditFreelancerForm>();

	return (
		<EditForm selectIcons>
			<ErrorsHandlerWrapper positionRight={-21} width={18}>
				<Input
					id="fullName"
					defaultValue={profile?.fullName}
					{...register("fullName")}
					type="text"
					autoComplete="off"
					placeholder={t("employer.create.fullNameLabel")}
					width={100}
				/>
				{errors?.fullName && (
					<StyledSpan fontSize="sm" type="validation">
						<strong>{errors?.fullName?.message}</strong>
					</StyledSpan>
				)}
			</ErrorsHandlerWrapper>
			<ErrorsHandlerWrapper positionRight={-21} width={18}>
				<Controller
					name="category"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<SelectElement
							options={categories}
							{...field}
							required
							id="category"
							isClearable
							placeholder={t("freelancer.createProfile.selectOption.category")}
							isSearchable
							classNamePrefix="react-select"
						/>
					)}
				/>
			</ErrorsHandlerWrapper>
		</EditForm>
	);
}

export default EditFreelancerForm;
