import { SubmitHandler } from 'react-hook-form';

export interface IForgotPasswordForm {
  email: string;
}

export interface IonSubmitForgotPassword {
  onSubmit: SubmitHandler<IForgotPasswordForm>;
  isLoading: boolean;
}
