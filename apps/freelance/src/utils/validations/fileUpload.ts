import { IProposal } from "redux/interfaces/IProposal";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

export const schema = yup.object().shape({
	file: yup
		.mixed()
		.required("You need to upload your CV")
		.test("type", "Only the following formats are accepted: .doc, .docx, .pdf", file => {
			return file && (file[0].type === "application/pdf" || file[0].type === "application/msword");
		}),
	coverLetter: yup.string().min(100, "Min 100 symbols").required("This field is required"),
});
