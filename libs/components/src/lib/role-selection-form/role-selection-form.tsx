import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledButton } from "@freelance/components";
import { Form, RadioGroup } from "./role-selection-form.styled";

export function RoleSelectionForm() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [radioOption, setRadioOption] = useState<string>("");

	const redirect = () => navigate(`/${radioOption}`);

	return (
		<Form>
			<RadioGroup>
				<input
					type="radio"
					name="role"
					value="jobOwner"
					id="jobOwner"
					onClick={() => setRadioOption("job-owner/create-profile1")}
				/>
				<label htmlFor="jobOwner">{t("roleSelection.roleJobOwner")}</label>
				<input
					type="radio"
					name="role"
					value="freelancer"
					id="freelancer"
					onClick={() => setRadioOption("freelancer/create-profile1")}
				/>
				<label htmlFor="freelancer">{t("roleSelection.roleFreelancer")}</label>
			</RadioGroup>
			{radioOption === "" ? (
				<StyledButton disabled buttonSize="lg" buttonColor="redGradient">
					{t("recoverPassForm.buttonContinue")}
				</StyledButton>
			) : (
				<StyledButton buttonSize="lg" buttonColor="redGradient" onClick={redirect}>
					{t("recoverPassForm.buttonContinue")}
				</StyledButton>
			)}
		</Form>
	);
}

export default RoleSelectionForm;
