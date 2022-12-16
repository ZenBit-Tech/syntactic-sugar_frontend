import * as yup from "yup";

export const imageSchema = yup.object().shape({
	file: yup
		.mixed()
		.required("You need to upload your avatar")
		.test("type", "Only the following formats are accepted: .jpg, .jpeg, .png", file => {
      if (file.length > 0) {
        return (
				file &&
				(file[0]?.type === "image/jpeg" ||
					file[0]?.type === "image/png" ||
					file[0]?.type === "image/jpg")
			);
      }
      return true
		}),
});
