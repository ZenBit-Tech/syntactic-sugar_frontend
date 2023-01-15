import { useTranslation } from "react-i18next";
import { Container, StyledTitle, StyledFileField } from "@freelance/components";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { useEditEmployerProfile } from "./edit-employer-profileHook";

export interface EditEmployerContainerProps {
	isOpen: boolean;
	existingImage: string;
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

export function EditEmployerContainer({
	existingImage,
	setImageUrl,
	isOpen,
}: EditEmployerContainerProps) {
	const { t } = useTranslation();

	useEditEmployerProfile({ setImageUrl });

	return (
		<Container modal>
			<StyledTitle tag="h1" fontWeight={700} fontSize="lg">
				{t("dashboard.editProfile")}
			</StyledTitle>
			<StyledFileField
				isOpen={isOpen}
				width={25}
				imageUrl={existingImage}
				defaultImage={DEFAULT_IMAGE}
				setImageUrl={setImageUrl}
			/>
		</Container>
	);
}

export default EditEmployerContainer;
