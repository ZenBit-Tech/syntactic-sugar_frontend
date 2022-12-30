import { IProposal } from "redux/interfaces/IProposal";
import { useTranslation } from "react-i18next";
import { object, string, mixed } from "yup";

export const schema = object({
	file: mixed()
		.required("This field is required")
		.test("type", "Only the following formats are accepted: .pdf, .doc, .docx", file => {
			if (file.length > 0) {
				return (
					file &&
					(file[0]?.type === "application/pdf" ||
						file[0]?.type === "application/msword" ||
						file[0]?.type ===
							"application/vnd.openxmlformats-officedocument.wordprocessingml.document")
				);
			}

			return true;
		}),
	coverLetter: string().required("This field is required").min(100, "Min 100 symbols"),
	hourRate: object().nullable(),
});
