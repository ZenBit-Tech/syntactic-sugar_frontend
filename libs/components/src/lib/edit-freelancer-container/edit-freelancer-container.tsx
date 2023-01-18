import { useTranslation } from "react-i18next";
import {
	Container,
	StyledTitle,
	StyledFileField,
	FlexContainer,
	EditFreelancerForm,
} from "@freelance/components";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { useEditFreelancerProfile } from "./edit-freelancer-profileHook";

export interface EditFreelancerContainerProps {
	existingImage: string;
	isImageChanged: boolean;
	setIsImageChanged: React.Dispatch<React.SetStateAction<boolean>>;
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
	isFormChange: boolean;
	setIsFormChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export function EditFreelancerContainer({
	existingImage,
	setIsImageChanged,
	isImageChanged,
	setImageUrl,
	isFormChange,
	setIsFormChange,
}: EditFreelancerContainerProps) {
	const { t } = useTranslation();
	const { data } = useEditFreelancerProfile({ setImageUrl });

	return (
		<Container modal>
			<StyledTitle tag="h1" fontWeight={700} fontSize="lg">
				{t("dashboard.editProfile")}
			</StyledTitle>
			<FlexContainer alignItems="start">
				<StyledFileField
					width={25}
					imageUrl={existingImage}
					defaultImage={DEFAULT_IMAGE}
					setIsImageChanged={setIsImageChanged}
					setImageUrl={setImageUrl}
				/>
				<EditFreelancerForm
					profile={data}
					imageUrl={existingImage}
					isImageChanged={isImageChanged}
					isFormChange={isFormChange}
					setIsFormChange={setIsFormChange}
					setIsImageChanged={setIsImageChanged}
				/>
			</FlexContainer>
		</Container>
	);
}

export default EditFreelancerContainer;
