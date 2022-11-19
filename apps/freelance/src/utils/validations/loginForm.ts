import { object, string } from "yup";

export const signInSchema = object({
	email: string().email("Invalid E-mail format").required("E-mail is required"),
	password: string()
		.min(8, "Minimum 8 characters")
		.max(24, "Maximum 24 characters")
		.required("password is required"),
});
