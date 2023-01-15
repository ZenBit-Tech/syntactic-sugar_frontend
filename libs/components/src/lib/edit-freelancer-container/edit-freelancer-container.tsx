import { useTranslation } from "react-i18next";
import { Container, StyledTitle, StyledFileField } from "@freelance/components";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { useEditFreelancerProfile } from "./edit-freelancer-profileHook";

export interface EditFreelancerContainerProps {
	isOpen: boolean;
	existingImage: string;
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

export function EditFreelancerContainer({
	isOpen,
	existingImage,
	setImageUrl,
}: EditFreelancerContainerProps) {
	const { t } = useTranslation();

	useEditFreelancerProfile({ setImageUrl });

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

export default EditFreelancerContainer;
