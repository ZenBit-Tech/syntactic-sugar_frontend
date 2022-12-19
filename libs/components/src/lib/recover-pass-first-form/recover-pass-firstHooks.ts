import { useSendLinkEmailMutation } from "redux/resetPassword/resetPasswordSlice";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { IForgotPasswordForm, IonSubmitForgotPassword } from "./interfaces";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CHECK_YOUR_EMAIL_PAGE } from "utils/constants/links";

export function useForgotPasswordSendEmail(): IonSubmitForgotPassword {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [sendLinkEmail, { isLoading }] = useSendLinkEmailMutation();

	const onSubmit: SubmitHandler<IForgotPasswordForm> = async data => {
		try {
			await sendLinkEmail(data);
			navigate(CHECK_YOUR_EMAIL_PAGE);
		} catch (err) {
			toast.error(t("recoverPassForm.errorMessageServerError"));
		}
	};

	return {
		onSubmit,
		isLoading,
	};
}
