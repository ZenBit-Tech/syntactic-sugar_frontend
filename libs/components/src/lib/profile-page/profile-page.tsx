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

/* eslint-disable-next-line */
export interface ProfilePageProps {}

interface IFormInput {
	fullName: string;
	category: SelectOptions;
	position: string;
	skills: SelectOptions;
	employmentType: SelectOptions;
	country: SelectOptions;
	hourRate: SelectOptions;
	availableAmountOfHour: SelectOptions;
	workExperience: SelectOptions;
	englishLevel: SelectOptions;
}

export function ProfilePage(props: ProfilePageProps) {
	const navigate = useNavigate();
	const [createFrelancer, { isError }] = useCreateFreelancerMutation();
	const dispatch = useAppDispatch();
	const { handleSubmit, control } = useForm<IFormInput>();

	useEffect(() => {
		if (isError) {
			console.log("Please, check login or password");
		}
	}, [isError]);

	const onSubmit: SubmitHandler<IFormInput> = data => {
		createFrelancer(data);
		dispatch(addFreelancerInfo(data));
		navigate("./profile_1");
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
							render={({ field }) => <Input {...field} required placeholder="Full name" />}
						/>
						<Controller
							name="category"
							control={control}
							render={({ field }) => (
								<Select
									options={categories}
									required
									{...field}
									placeholder="Select category"
									isSearchable
								/>
							)}
						/>
						<Controller
							name="position"
							control={control}
							render={({ field }) => <Input {...field} required placeholder="Position" />}
						/>
						<Controller
							name="skills"
							control={control}
							render={({ field }) => (
								<Select
									options={skills}
									{...field}
									required
									placeholder="Select skills"
									isSearchable
									isMulti
								/>
							)}
						/>
						<Controller
							name="employmentType"
							control={control}
							render={({ field }) => (
								<Select
									options={employmentType}
									required
									{...field}
									placeholder="Select employment type"
								/>
							)}
						/>
						<Controller
							name="country"
							control={control}
							render={({ field }) => (
								<Select
									options={countries}
									required
									{...field}
									placeholder="Select country"
									isSearchable
								/>
							)}
						/>
						<Controller
							name="hourRate"
							control={control}
							render={({ field }) => (
								<Select
									options={hourRate}
									required
									{...field}
									placeholder="Select hour rate"
									isSearchable
								/>
							)}
						/>
						<Controller
							name="availableAmountOfHour"
							control={control}
							render={({ field }) => (
								<Select
									options={hoursAmount}
									{...field}
									required
									placeholder="Select amount of hours"
									isSearchable
								/>
							)}
						/>
						<Controller
							name="workExperience"
							control={control}
							render={({ field }) => (
								<Select
									options={workExperience}
									required
									{...field}
									placeholder="Select work experience"
									isSearchable
								/>
							)}
						/>
						<Controller
							name="englishLevel"
							control={control}
							render={({ field }) => (
								<Select
									options={englishLevel}
									{...field}
									required
									placeholder="Select english level"
									isSearchable
								/>
							)}
						/>
						<StyledButton buttonSize="md" buttonColor="blue" type="submit">
							Continue
						</StyledButton>
					</Form>
				</Container>
			</StyledPage>
		</ThemeProvider>
	);
}

export default ProfilePage;
