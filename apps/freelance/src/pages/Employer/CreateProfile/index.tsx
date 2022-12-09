import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import {
	ThemeColors,
	ThemeBackground,
	Dashboard,
	StyledTitle,
	StyledButton,
} from "@freelance/components";
import { StyledPage } from "@pages/Freelancer/CreateProfile1/style";

import { ThemeProvider } from "styled-components";
import { FormBox, BtnBox, TextArea } from "./styles";

interface IFormInput {
	fullName: string;
	companyName: string;
	position: string;
	phone: string;
	linkedIn: string;
	website: string;
	aboutUs: string;
}

export function CreateEmployerProfile() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { handleSubmit, control } = useForm<IFormInput>();

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<StyledPage>
				<Dashboard userRole="employer">
					<StyledTitle tag="h2" fontSize="md" fontWeight={700}>
						{t("dashboard.profilePage.title")}
					</StyledTitle>
					<StyledTitle tag="h2" fontSize="md" fontWeight={500}>
						{t("employer.create.title")}
					</StyledTitle>
					<FormBox>
						{/* <label id="fullName" /> */}
						<Controller
							name="fullName"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<input
									id="fullName"
									type="text"
									required
									{...field}
									placeholder={t("employer.create.fullNameLabel")}
								/>
							)}
						/>

						<Controller
							name="position"
							control={control}
							render={({ field }) => (
								<input type="text" {...field} placeholder={t("employer.create.positionLabel")} />
							)}
						/>
						<Controller
							name="companyName"
							control={control}
							render={({ field }) => (
								<input
									type="text"
									id="companyName"
									{...field}
									required
									placeholder={t("employer.create.companyNameLabel")}
								/>
							)}
						/>
						<Controller
							name="phone"
							control={control}
							render={({ field }) => (
								<input type="text" {...field} placeholder={t("employer.create.phoneLabel")} />
							)}
						/>
						<Controller
							name="linkedIn"
							control={control}
							render={({ field }) => (
								<input type="text" {...field} placeholder={t("employer.create.linkedinLabel")} />
							)}
						/>

						<Controller
							name="website"
							control={control}
							render={({ field }) => (
								<input type="text" {...field} placeholder={t("employer.create.websiteLabel")} />
							)}
						/>
						<Controller
							name="aboutUs"
							control={control}
							render={({ field }) => (
								<textarea {...field} placeholder={t("employer.create.aboutusLabel")} />
							)}
						/>
						<StyledButton type="submit" buttonColor="redGradient" buttonSize="sm" fontSize="md">
							<strong>{t("employer.create.btn1")}</strong>
						</StyledButton>
					</FormBox>
				</Dashboard>
			</StyledPage>
		</ThemeProvider>
	);
}
