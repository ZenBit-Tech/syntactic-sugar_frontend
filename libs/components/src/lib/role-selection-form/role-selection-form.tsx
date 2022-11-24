import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledButton } from "@freelance/components";
import { Form, RadioGroup } from "./role-selection-form.styled";

type RoleOptions = "job-owner" | "freelancer";

export function RoleSelectionForm() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [radioOption, setRadioOption] = useState<RoleOptions | null>(null);

	const roleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRadioOption(e.target.value as RoleOptions);
	};

	const redirect = () => {
		navigate(`/${radioOption}/create-profile1`);
	};

	return (
		<Form>
			<RadioGroup>
				<input type="radio" name="role" value="job-owner" id="jobOwner" onChange={roleHandler} />
				<label htmlFor="jobOwner">{t("roleSelection.roleJobOwner")}</label>
				<input type="radio" name="role" value="freelancer" id="freelancer" onChange={roleHandler} />
				<label htmlFor="freelancer">{t("roleSelection.roleFreelancer")}</label>
			</RadioGroup>
			{radioOption ? (
				<StyledButton buttonSize="lg" buttonColor="redGradient" onClick={redirect}>
					{t("recoverPassForm.buttonContinue")}
				</StyledButton>
			) : (
				<StyledButton disabled buttonSize="lg" buttonColor="redGradient">
					{t("recoverPassForm.buttonContinue")}
				</StyledButton>
			)}
		</Form>
	);
}

export default RoleSelectionForm;
