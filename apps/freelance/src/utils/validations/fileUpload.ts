import * as yup from "yup";

export const schema = yup.object().shape({
	file: yup
		.mixed()
		.required("Add your CV")
		.test("type", "Only doc, docx, pdf allowed", value => {
			return (value && value[0].type === "doc") || "docx" || "pdf";
		}),
	coverLetter: yup.string().required("Min 100 symbols"),
});
