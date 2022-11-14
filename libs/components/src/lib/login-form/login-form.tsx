import { useTranslation } from 'react-i18next';
import { Form } from './login-form.styled';
import { StyledButton } from '@freelance/components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from 'utils/validations/loginForm';
import { InferType } from 'yup';

/* eslint-disable-next-line */
export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const { t } = useTranslation();
  type Props = InferType<typeof signInSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>({
    resolver: yupResolver(signInSchema),
  });

  const formSubmitHandler = (data:Props) => {
    console.log(data);
    //use rtk query in future of course
  };

  return (
    <Form onSubmit={handleSubmit(formSubmitHandler)}>
      <input  {...register("email")} type="email" name="email" placeholder="E-mail" />
      <span>{errors?.email?.message}</span>
      <input  {...register("password")} type="password" name="password" placeholder="Password" />
      <span>{errors?.password?.message}</span>
      <StyledButton buttonSize="lg" buttonColor="redGradient" type="submit">
        {t('signForm.buttonSignIn')}
      </StyledButton>
    </Form>
  );
}

export default LoginForm;
