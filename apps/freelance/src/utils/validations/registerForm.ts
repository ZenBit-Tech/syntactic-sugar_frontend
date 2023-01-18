import { boolean, object, ref, string } from "yup";
import { useTranslation } from "react-i18next";

export const useSignUpSchema = () => {
	const { t } = useTranslation();

	const email: string = t("signForm.invalidMail");
	const emailRequired: string = t("signForm.reqEmail");
	const passwordRequired: string = t("signForm.pasReq");
	const min: string = t("signForm.min");
	const max: string = t("signForm.max");
	const password: string = t("signForm.pas");
	const pasMatch: string = t("signForm.pasMatch");
	const agreement: string = t("signForm.agreement");

	return object({
		email: string().email(email).required(emailRequired),
		password: string().required(passwordRequired).min(8, min).max(24, max),
		passwordConfirmation: string().oneOf([ref(password), null], pasMatch),
		agreement: boolean().required(agreement).oneOf([true], agreement),
	});
};
