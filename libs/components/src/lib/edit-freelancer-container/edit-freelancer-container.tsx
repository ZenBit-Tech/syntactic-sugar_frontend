import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, StyledTitle, StyledFileField } from "@freelance/components";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { useEditFreelancerProfile } from "./edit-freelancer-profileHook";

export interface EditFreelancerContainerProps {
	existingImage: string;
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

export function EditFreelancerContainer({
	existingImage,
	setImageUrl,
}: EditFreelancerContainerProps) {
	const { t } = useTranslation();
	const [isImageChanged, setIsImageChanged] = useState<boolean>(false);

	useEditFreelancerProfile({ setImageUrl });

	return (
		<Container modal>
			<StyledTitle tag="h1" fontWeight={700} fontSize="lg">
				{t("dashboard.editProfile")}
			</StyledTitle>
			<StyledFileField
				width={25}
				imageUrl={existingImage}
				defaultImage={DEFAULT_IMAGE}
				setIsImageChanged={setIsImageChanged}
				setImageUrl={setImageUrl}
			/>
		</Container>
	);
}

export default EditFreelancerContainer;
