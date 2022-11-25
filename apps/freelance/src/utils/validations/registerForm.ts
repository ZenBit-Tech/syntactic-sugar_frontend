import { object, ref, string } from "yup";

export const signUpSchema = object({
	email: string().email("Invalid E-mail format").required("E-mail is required"),
	password: string()
		.required("Password is required")
		.min(8, "Minimum 8 characters")
		.max(24, "Maximum 24 characters"),
	passwordConfirmation: string().oneOf([ref("password"), null], "Passwords must match"),
});
