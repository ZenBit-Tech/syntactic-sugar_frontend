import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Select from "react-select";
import { addFreelancerInfo } from "redux/createFreelancer/freelancer-slice";
import { useAppDispatch } from "redux/example-hooks";
import { useCreateFreelancerMutation } from "redux/createFreelancer/freelancer-pageApi";
import { useNavigate } from "react-router-dom";
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
import { StyledPage, Form } from "./style";
import {
	ThemeColors,
	ThemeBackground,
	Dashboard,
	StyledTitle,
	StyledButton,
} from "@freelance/components";
import { ThemeProvider } from "styled-components";
import { useTranslation } from "react-i18next";

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
}

export function CreateProfile1(props: ProfilePageProps) {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [createFrelancer, { status }] = useCreateFreelancerMutation();
	const dispatch = useAppDispatch();
	const { handleSubmit, control } = useForm<IFormInput>();

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
		};
		try {
			await dispatch(addFreelancerInfo(freelancerInfo));
			await createFrelancer(freelancerInfo);
			navigate("./profile_1");
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
						<Controller
							name="fullName"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<input
									type="text"
									required
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
									<Select
										options={categories}
										{...field}
										required
										placeholder={t("freelancer.createProfile.selectOption.category")}
										isSearchable
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
									<Select
										options={skills}
										{...field}
										required
										placeholder={t("freelancer.createProfile.selectOption.skills")}
										isSearchable
										isMulti
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
									<Select
										options={employmentType}
										{...field}
										required
										placeholder={t("freelancer.createProfile.selectOption.employmentType")}
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
									<Select
										options={countries}
										{...field}
										required
										placeholder={t("freelancer.createProfile.selectOption.country")}
										isSearchable
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
									<Select
										options={hourRate}
										{...field}
										required
										placeholder={t("freelancer.createProfile.selectOption.hourRate")}
										isSearchable
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
									<Select
										options={hoursAmount}
										{...field}
										required
										placeholder={t("freelancer.createProfile.selectOption.amountHours")}
										isSearchable
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
									<Select
										options={workExperience}
										{...field}
										required
										placeholder={t("freelancer.createProfile.selectOption.workExperience")}
										isSearchable
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
									<Select
										options={englishLevel}
										{...field}
										required
										placeholder={t("freelancer.createProfile.selectOption.englishLevel")}
										isSearchable
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
