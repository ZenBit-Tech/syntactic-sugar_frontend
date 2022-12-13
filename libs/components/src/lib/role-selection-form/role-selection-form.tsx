import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledButton } from "@freelance/components";
import { Form, RadioGroup } from "./role-selection-form.styled";
import { useAddRoleMutation, UserRoles } from "redux/role.api";

type RoleOptions = "employer" | "freelancer";

export function RoleSelectionForm() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [addRole] = useAddRoleMutation();
	const [radioOption, setRadioOption] = useState<RoleOptions | null>(null);

	const roleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRadioOption(e.target.value as RoleOptions);
	};

	const handleContinueButton = () => {
		addRole(
			radioOption === "employer" ? { role: UserRoles.EMPLOYER } : { role: UserRoles.FREELANCER },
		);
		navigate(`/${radioOption}/create-profile1`);
	};

	return (
		<Form>
			<RadioGroup>
				<input type="radio" name="role" value="employer" id="jobOwner" onChange={roleHandler} />
				<label htmlFor="jobOwner">{t("roleSelection.roleJobOwner")}</label>
				<input type="radio" name="role" value="freelancer" id="freelancer" onChange={roleHandler} />
				<label htmlFor="freelancer">{t("roleSelection.roleFreelancer")}</label>
			</RadioGroup>
			{radioOption ? (
				<StyledButton buttonSize="lg" buttonColor="redGradient" onClick={handleContinueButton}>
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
