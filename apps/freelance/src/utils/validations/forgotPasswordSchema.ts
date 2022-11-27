import { object, string, ref, SchemaOf } from "yup";
import { useTranslation } from "react-i18next";
import { IForgotPasswordForm } from "@freelance/components";

export const useForgotPasswordSchema = (): SchemaOf<IForgotPasswordForm> => {
	const { t } = useTranslation();
	const messageEmail: string = t("recoverPassForm.validationEmailMessage");
	const messageRequired: string = t("recoverPassForm.validationRequiredMessage");

	return object({
		email: string().email(messageEmail).required(messageRequired),
	});
};
