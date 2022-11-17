import { SubmitHandler } from 'react-hook-form';

export interface IFormInputs {
  email: string;
}

export interface IonSubmit {
  onSubmit: SubmitHandler<IFormInputs>;
  isLoading: boolean;
}
