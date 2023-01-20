import { object, string } from "yup";
import { useTranslation } from "react-i18next";

export const useSignInSchema = () => {
	const { t } = useTranslation();

	const invalidEmail: string = t("loginForm.format");
	const reqEmail: string = t("loginForm.req");
	const min: string = t("loginForm.min", { min: "8" });
	const max: string = t("loginForm.max", { max: "24" });
	const reqPass: string = t("loginForm.reqPass");

	return object({
		email: string().email(invalidEmail).required(reqEmail),
		password: string().min(8, min).max(24, max).required(reqPass),
	});
};
