import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Select from "react-select";
import { useEffect } from "react";
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
import { Input } from "antd";
import { StyledPage, Container, Form } from "./profile-page.styled";
import { ThemeColors } from "@freelance/components";
import { ThemeProvider } from "styled-components";
import { StyledButton } from "@freelance/components";
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

export function ProfilePage(props: ProfilePageProps) {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [createFrelancer, { status }] = useCreateFreelancerMutation();
	const dispatch = useAppDispatch();
	const { handleSubmit, control } = useForm<IFormInput>();

	useEffect(() => {
		if (status === "rejected") {
			alert(t("createFreelancer.alert"));
		}
	}, [status]);

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
		<ThemeProvider theme={ThemeColors}>
			<StyledPage>
				<Container>
					<p></p>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Controller
							name="fullName"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<Input {...field} placeholder={t("createFreelancer.fullName")} />
							)}
						/>
						<Controller
							name="category"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<Select
									options={categories}
									{...field}
									placeholder={t("createFreelancer.category")}
									isSearchable
								/>
							)}
						/>
						<Controller
							name="position"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<Input {...field} placeholder={t("createFreelancer.position")} />
							)}
						/>
						<Controller
							name="skills"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<Select
									options={skills}
									{...field}
									placeholder={t("createFreelancer.skills")}
									isSearchable
									isMulti
								/>
							)}
						/>
						<Controller
							name="employmentType"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<Select
									options={employmentType}
									{...field}
									placeholder={t("createFreelancer.employment")}
								/>
							)}
						/>
						<Controller
							name="country"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<Select
									options={countries}
									{...field}
									placeholder={t("createFreelancer.country")}
									isSearchable
								/>
							)}
						/>
						<Controller
							name="hourRate"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<Select
									options={hourRate}
									{...field}
									placeholder={t("createFreelancer.hourRate")}
									isSearchable
								/>
							)}
						/>
						<Controller
							name="availableAmountOfHour"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<Select
									options={hoursAmount}
									{...field}
									placeholder={t("createFreelancer.avaliableHours")}
									isSearchable
								/>
							)}
						/>
						<Controller
							name="workExperience"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<Select
									options={workExperience}
									{...field}
									placeholder={t("createFreelancer.experience")}
									isSearchable
								/>
							)}
						/>
						<Controller
							name="englishLevel"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<Select
									options={englishLevel}
									{...field}
									placeholder={t("createFreelancer.english")}
									isSearchable
								/>
							)}
						/>
						<StyledButton buttonSize="md" buttonColor="blue" type="submit">
							{t("createFreelancer.buttonText")}
						</StyledButton>
					</Form>
				</Container>
			</StyledPage>
		</ThemeProvider>
	);
}

export default ProfilePage;
