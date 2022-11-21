import { SubmitHandler } from 'react-hook-form';

export interface IResetPasswordForm {
  password: string;
  passConfirm: string;
}

export interface IonSubmitResetPassword {
  onSubmit: SubmitHandler<IResetPasswordForm>;
  isLoading: boolean;
}
