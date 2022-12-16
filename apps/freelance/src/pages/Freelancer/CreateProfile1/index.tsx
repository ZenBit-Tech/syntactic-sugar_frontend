import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { addFreelancerInfo } from "redux/createFreelancer/freelancer-slice";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "src/redux/example-hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	countries,
	categories,
	skills,
	employmentType,
	hourRate,
	hoursAmount,
	workExperience,
	englishLevel,
	SelectOptions,
} from "utils/select-options/options";
import { StyledPage, Form, StyledFileField } from "./style";
import {
	ThemeColors,
	ThemeBackground,
	Dashboard,
	StyledTitle,
	StyledButton,
} from "@freelance/components";
import { ThemeProvider } from "styled-components";
import { SelectElement } from "./style";
import { useTranslation } from "react-i18next";
import { CREATE_PROFILE_2 } from "src/utils/constants/breakpoint";
import { imageSchema } from "utils/validations/imageUpload";
import { useUploadImageMutation } from "redux/uploadImage/upload-image.api";
import { baseUrl } from "utils/constants/redux-query";
import { DEFAULT_IMAGE } from "utils/constants/links";

/* eslint-disable-next-line */
export interface ProfilePageProps {}

interface IFormInput {
	fullName: string;
	category: SelectOptions;
	position: string;
	skills: SelectOptions[];
	employmentType: SelectOptions;
	country: SelectOptions;
	hourRate: SelectOptions;
	availableAmountOfHour: SelectOptions;
	workExperience: SelectOptions;
	englishLevel: SelectOptions;
	file: string;
}
interface IFile {
	file: File | null;
}

export function CreateProfile1(props: ProfilePageProps) {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [imageUrl, setImageUrl] = useState<string>(DEFAULT_IMAGE);
	const [uploadImage, { data: imageData, isLoading, isError, isSuccess }] =
		useUploadImageMutation();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<IFormInput>({ resolver: yupResolver(imageSchema) });

	const onSubmitFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
		try {
			const formData = new FormData();
			if (event.currentTarget.files) {
				formData.append("file", event.currentTarget.files[0]);
			}
			await uploadImage(formData);
		} catch (error) {
			alert(error);
		}
	};

	useEffect(() => {
		if (isSuccess) {
			setImageUrl(baseUrl + "/" + imageData?.file);
		}
	}, [imageData]);

	const onSubmit: SubmitHandler<IFormInput> = async values => {
		const freelancerInfo = {
			fullName: values.fullName,
			category: values.category.label,
			position: values.position,
			skills: values.skills.map(skill => skill.label),
			employmentType: values.employmentType.label,
			country: values.country.label,
			hourRate: values.hourRate.label,
			availableAmountOfHour: values.availableAmountOfHour.label,
			workExperience: values.workExperience.label,
			englishLevel: values.englishLevel.label,
			file: imageData && imageUrl !== DEFAULT_IMAGE ? imageData.file : null,
		};
		try {
			await dispatch(addFreelancerInfo(freelancerInfo));
			navigate(CREATE_PROFILE_2);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<StyledPage>
				<Dashboard userRole="freelancer">
					<StyledTitle tag="h2" fontSize="md" fontWeight={700}>
						{t("dashboard.profilePage.title")}
					</StyledTitle>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<StyledFileField>
							<img src={imageUrl} alt="User Avatar" />
							<div>
								<label>
									{t("image.chooseImage")}
									<input
										id="fileInput"
										type="file"
										accept=".png, .jpg, .jpeg"
										{...register("file")}
										onChange={onSubmitFile}
									/>
								</label>
								<label>
									{t("image.resetImage")}
									<input
										type="button"
										onClick={() => {
											setImageUrl(DEFAULT_IMAGE);
										}}
									/>
								</label>
							</div>
						</StyledFileField>
						<Controller
							name="fullName"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<input
									type="text"
									required
									id="fullName"
									{...field}
									placeholder={t("freelancer.createProfile.fullNamePlaceholder")}
								/>
							)}
						/>
						<div className="selectContainer">
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
						</div>
						<Controller
							name="position"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<input
									{...field}
									id="position"
									placeholder={t("freelancer.createProfile.positionPlaceholder")}
									required
								/>
							)}
						/>
						<div className="selectContainer">
							<Controller
								name="skills"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<SelectElement
										options={skills}
										{...field}
										required
										id="skills"
										placeholder={t("freelancer.createProfile.selectOption.skills")}
										isSearchable
										isClearable
										isMulti
										classNamePrefix="react-select"
									/>
								)}
							/>
						</div>
						<div className="selectContainer">
							<Controller
								name="employmentType"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<SelectElement
										options={employmentType}
										{...field}
										required
										id="employmentType"
										isSearchable
										isClearable
										placeholder={t("freelancer.createProfile.selectOption.employmentType")}
										classNamePrefix="react-select"
									/>
								)}
							/>
						</div>
						<div className="selectContainer">
							<Controller
								name="country"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<SelectElement
										options={countries}
										{...field}
										required
										id="country"
										placeholder={t("freelancer.createProfile.selectOption.country")}
										isSearchable
										isClearable
										classNamePrefix="react-select"
									/>
								)}
							/>
						</div>
						<div className="selectContainer">
							<Controller
								name="hourRate"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<SelectElement
										options={hourRate}
										{...field}
										required
										id="hourRate"
										isSearchable
										isClearable
										placeholder={t("freelancer.createProfile.selectOption.hourRate")}
										classNamePrefix="react-select"
									/>
								)}
							/>
						</div>
						<div className="selectContainer">
							<Controller
								name="availableAmountOfHour"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<SelectElement
										options={hoursAmount}
										{...field}
										required
										id="amountHours"
										isSearchable
										isClearable
										placeholder={t("freelancer.createProfile.selectOption.availableAmountOfHour")}
										classNamePrefix="react-select"
									/>
								)}
							/>
						</div>
						<div className="selectContainer">
							<Controller
								name="workExperience"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<SelectElement
										options={workExperience}
										{...field}
										required
										id="workExperience"
										placeholder={t("freelancer.createProfile.selectOption.workExperience")}
										isSearchable
										isClearable
										classNamePrefix="react-select"
									/>
								)}
							/>
						</div>
						<div className="selectContainer">
							<Controller
								name="englishLevel"
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<SelectElement
										options={englishLevel}
										{...field}
										id="englishLevel"
										required
										placeholder={t("freelancer.createProfile.selectOption.englishLevel")}
										isSearchable
										isClearable
										classNamePrefix="react-select"
									/>
								)}
							/>
						</div>
						<StyledButton type="submit" buttonColor="redGradient" buttonSize="sm" fontSize="md">
							<strong>{t("recoverPassForm.buttonContinue")}</strong>
						</StyledButton>
					</Form>
				</Dashboard>
			</StyledPage>
		</ThemeProvider>
	);
}

export default CreateProfile1;
