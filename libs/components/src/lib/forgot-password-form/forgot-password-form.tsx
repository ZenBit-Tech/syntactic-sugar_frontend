import { useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Form, Button, Space } from 'antd';
import { schemaForgotPasswordForm } from 'apps/freelance/src/utilities/validation-shemas';
import {
  FormTitle,
  FoirmInstructions,
  FormInput,
  InputWrapper,
} from './forgot-password-form.styled';

/* eslint-disable-next-line */
export interface ForgotPasswordFormProps {}
interface IFormInputs {
  email: string;
}

export function ForgotPasswordForm(props: ForgotPasswordFormProps) {
  const { t } = useTranslation();

  const {
    control,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schemaForgotPasswordForm),
  });

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log(data);
  };

  return (
    <Space direction="vertical">
      <FormTitle>{t('forgotPasswordForm.formTitle')}</FormTitle>
      <FoirmInstructions>{t('forgotPasswordForm.firstPageInstructions')}</FoirmInstructions>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        autoComplete="off"
        onFinish={handleSubmit(onSubmit)}
      >
        <InputWrapper>
          <Form.Item
            wrapperCol={{ offset: 4, span: 16 }}
            validateStatus={errors.email ? 'error' : 'success'}
            help={errors.email ? errors.email?.message : ''}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => <FormInput {...field} />}
            />
          </Form.Item>
        </InputWrapper>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
}

export default ForgotPasswordForm;
