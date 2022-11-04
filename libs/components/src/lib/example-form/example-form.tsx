import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {addUser} from 'apps/freelance/src/redux/example-slice';



type FormData = {
  firstName: string;
  lastName: string;
};



const StyledExampleForm = styled.div`
 // Your styles here
 margin: 0 auto;
`

export function ExampleForm() {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset,  formState: { errors, isValid } } = useForm<FormData>({
    mode: "onBlur"
  });
  const onSubmit = handleSubmit(({ firstName, lastName }) => {
    console.log(firstName, lastName);
    dispatch(addUser({firstName, lastName}))
    reset();
  });  

  return (
    <StyledExampleForm>
    <form onSubmit={onSubmit}>
      <label>First name</label>
      <input {...register("firstName", {
        required: "This field is required",
        minLength: {
          value: 3,
          message: "Min 3 symbols"
        }
      })} />
      <div>{errors?.firstName && <span>{errors?.firstName?.message || "Error!"}</span>}</div>
      <label>Last name</label>
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
