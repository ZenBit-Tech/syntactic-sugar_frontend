import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setUserData } from "redux/userState/userSlice";
import { StyledButton } from "@freelance/components";
import { useAddRoleMutation, UserRoles } from "redux/role.api";
import { Form, RadioGroup } from "./role-selection-form.styled";
import { CREATE_PROFILE_1, EMPLOYER_PROFILE, EMPLOYER } from "utils/constants/breakpoint";

type RoleOptions = "EMPLOYER" | "FREELANCER" | "GUEST";

export function RoleSelectionForm() {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [addRole, { data: userData, isSuccess, isError }] = useAddRoleMutation();
	const [radioOption, setRadioOption] = useState<RoleOptions>("GUEST");

	console.log(radioOption);

	const roleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRadioOption(e.target.value as RoleOptions);
	};

	useEffect(() => {
		if (isSuccess) {
			dispatch(setUserData({ token: userData?.token, role: userData?.role }));
		}
		if (isError) {
			toast.error(t("recoverPassForm.errorMessageServerError"));
		}
	}, [isSuccess, isError]);

	useEffect(() => {
		if (userData?.role === UserRoles.FREELANCER) {
			navigate(CREATE_PROFILE_1);
		}
		if (userData?.role === UserRoles.EMPLOYER) {
			navigate(EMPLOYER_PROFILE);
		}
	}, [userData]);

	const handleContinueButton = (event: React.FormEvent<HTMLButtonElement>) => {
		event.preventDefault();
		addRole(
			radioOption === EMPLOYER ? { role: UserRoles.EMPLOYER } : { role: UserRoles.FREELANCER },
		);
	};

	return (
		<Form>
			<RadioGroup>
				<input type="radio" name="role" value="EMPLOYER" id="jobOwner" onChange={roleHandler} />
				<label htmlFor="jobOwner">{t("roleSelection.roleJobOwner")}</label>
				<input type="radio" name="role" value="FREELANCER" id="freelancer" onChange={roleHandler} />
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
