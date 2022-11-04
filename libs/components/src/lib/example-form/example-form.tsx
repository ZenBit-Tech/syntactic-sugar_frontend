import styled from 'styled-components';

import { useForm } from "react-hook-form";


type FormData = {
  firstName: string;
  lastName: string;
};



const StyledExampleForm = styled.div`
 // Your styles here
 margin: 0 auto;
`

export function ExampleForm() {
  const { register, handleSubmit, reset,  formState: { errors, isValid } } = useForm<FormData>({
    mode: "onBlur"
  });
  const onSubmit = handleSubmit(({ firstName, lastName }) => {
    console.log(firstName, lastName);
    reset();
  }); 

  return (
    <StyledExampleForm>
    <form onSubmit={onSubmit}>
      <label>First Name</label>
      <input {...register("firstName", {
        required: "This field is required",
        minLength: {
          value: 3,
          message: "Min 3 symbols"
        }
      })} />
      <div>{errors?.firstName && <span>{errors?.firstName?.message || "Error!"}</span>}</div>
      <label>Last Name</label>
      <input {...register("lastName", {
        required: "This field is required",
        minLength: {
          value: 3,
          message: "Min 3 symbols"
        }
      })} />
      <div>{errors?.lastName && <span>{errors?.lastName?.message || "Error!"}</span>}</div>
      <button type="submit" disabled={!isValid}>Submit</button>
    </form>
    </StyledExampleForm>
  );
}

export default ExampleForm;
