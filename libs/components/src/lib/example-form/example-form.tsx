import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {addUser} from 'apps/freelance/src/redux/example-slice';
import {StyledForm, StyledLabel, StyledInput, StyledButton} from "./example-form.styled";

type FormData = {
  firstName: string;
  lastName: string;
};

export function ExampleForm() {
  const dispatch = useDispatch();
 const {t} = useTranslation();

  const { register, handleSubmit, reset,  formState: { errors, isValid } } = useForm<FormData>({
    mode: "onBlur"
  });
  const onSubmit = handleSubmit(({ firstName, lastName }) => {
    console.log(firstName, lastName);
    dispatch(addUser({firstName, lastName}))
    reset();
  });  

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel>{t('First name')}</StyledLabel>
      <StyledInput {...register("firstName", {
        required: true,
        minLength: {
          value: 3,
          message: t("Min 3 symbols")
        }
      })} />
      <div>{errors?.firstName && <span>{errors?.firstName?.message ||t("Error!")}</span>}</div>
      <StyledLabel>{t('Last name')}</StyledLabel>
      <StyledInput {...register("lastName", {
        required: true,
        minLength: {
          value: 3,
          message: t("Min 3 symbols")
        }
      })} />
      <div>{errors?.lastName && <span>{errors?.lastName?.message || t("Error!")}</span>}</div>
      <StyledButton type="submit" disabled={!isValid}>
          {t("Submit")}
        </StyledButton>
    </StyledForm>
  );
}

export default ExampleForm;
