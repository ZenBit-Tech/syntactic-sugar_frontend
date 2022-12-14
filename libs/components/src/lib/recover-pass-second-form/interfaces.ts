import { SubmitHandler } from "react-hook-form";

export interface IResetPasswordForm {
	password: string;
	passConfirm: string;
}

export interface IonSubmitResetPassword {
	open: boolean;
	handleModalOk: () => void;
	onSubmit: SubmitHandler<IResetPasswordForm>;
	isLoading: boolean;
}
