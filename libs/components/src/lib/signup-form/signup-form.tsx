import { Form } from './signup-form.styled';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '@freelance/components';
import { InferType } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from 'utils/validations/registerForm';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SignupFormProps {}

export function SignupForm(props: SignupFormProps) {
  const { t } = useTranslation();
  type Props = InferType<typeof signUpSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>({
    resolver: yupResolver(signUpSchema),
  });

  const formSubmitHandler = (data:Props) => {
    console.log(data);
    //use rtk query in future of course
  };

  return (
    <Form onSubmit={handleSubmit(formSubmitHandler)}>
      <input {...register("email")} type="email" name="email" placeholder={t('signForm.placeholderEmail')} />
      <span>{errors?.email?.message}</span>
      <input {...register("password")} type="password" name="password" placeholder={t('signForm.placeholderPassword')} />
      <span>{errors?.password?.message}</span>
      <input {...register("passwordConfirmation")} type="password" name="passwordConfirmation" placeholder={t('signForm.placeholderConfirmPassword')} />
      <span>{errors?.passwordConfirmation?.message}</span>
      <StyledButton buttonSize="lg" buttonColor="redGradient">
        {t('signForm.buttonSignUp')}
      </StyledButton>
    </Form>
  );
}

export default SignupForm;
