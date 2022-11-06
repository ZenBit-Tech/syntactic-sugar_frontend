import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {addUser} from 'apps/freelance/src/redux/example-slice';


type FormData = {
  firstName: string;
  lastName: string;
};

const StyledExampleForm = styled.form`
 // Your styles here
 max-width: 800px;
 margin: 0 auto;
`;

const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 50%;
  border-radius: 4px;
  background-color: white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

const StyledLabel = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: black;
  font-size: 14px;
  font-weight: 200;
`;

const StyledButton = styled.button`
  width: 50%;
  background: #001529;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 40px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
`

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
    <StyledExampleForm onSubmit={onSubmit}>
      <StyledLabel>{t('First name')}</StyledLabel>
      <StyledInput {...register("firstName", {
        required: "This field is required",
        minLength: {
          value: 3,
          message: "Min 3 symbols"
        }
      })} />
      <div>{errors?.firstName && <span>{errors?.firstName?.message ||"Error!"}</span>}</div>
      <StyledLabel>{t('Last name')}</StyledLabel>
      <StyledInput {...register("lastName", {
        required: "This field is required",
        minLength: {
          value: 3,
          message: "Min 3 symbols"
        }
      })} />
      <div>{errors?.lastName && <span>{errors?.lastName?.message || "Error!"}</span>}</div>
      <StyledButton type="submit" disabled={!isValid}>
          {t("Submit")}
        </StyledButton>
    </StyledExampleForm>
  );
}

export default ExampleForm;
