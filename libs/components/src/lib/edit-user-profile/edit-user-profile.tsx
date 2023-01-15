import { useTranslation } from "react-i18next";
import { Container, Form, StyledFileField, StyledTitle } from "@freelance/components";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { useEditUserProfile } from "./edit-user-profileHook";

export function EditUserProfile() {
	const { t } = useTranslation();
	const { imageUrl, inputKey, setDefaultImage, onSubmitFile } = useEditUserProfile(DEFAULT_IMAGE);

	return (
		<Container modal>
			<StyledTitle tag="h1" fontWeight={700} fontSize="lg">
				{t("dashboard.editProfile")}
			</StyledTitle>
			<StyledFileField
				width={25}
				imageUrl={imageUrl}
				inputKey={inputKey}
				onSubmit={onSubmitFile}
				setDefaultImage={setDefaultImage}
			/>
			<Form></Form>
		</Container>
	);
}

export default EditUserProfile;
