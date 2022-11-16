import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Form, Button, Space } from 'antd';
import { schemaForgotPasswordForm } from 'utils/validations/validation-shemas';
import { useForgotPasswordSendEmail } from './forgot-passwordHooks';
import { IFormInputs } from './interfaces';
import {
  FormTitle,
  FormInstructions,
  FormInput,
  InputWrapper,
} from './forgot-password-form.styled';
/* eslint-disable-next-line */

export function ForgotPasswordForm() {
  const { t } = useTranslation();
  const {
    control,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schemaForgotPasswordForm),
  });
  const { onSubmit, isLoading } = useForgotPasswordSendEmail();

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <Space direction="vertical">
      <FormTitle>{t('resetPasswordPage.formTitle')}</FormTitle>
      <FormInstructions>{t('resetPasswordPage.firstPageInstructions')}</FormInstructions>
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
          <Button type="primary" htmlType="submit" disabled={isLoading}>
            {isLoading ? 'Loading' : 'Submit'}
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
}

export default ForgotPasswordForm;
