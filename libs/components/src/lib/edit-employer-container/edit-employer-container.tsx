import { useTranslation } from "react-i18next";
import {
	Container,
	StyledTitle,
	StyledFileField,
	EditEmployerForm,
	FlexContainer,
} from "@freelance/components";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { useEditEmployerProfile } from "./edit-employer-profileHook";

export interface EditEmployerContainerProps {
	existingImage: string;
	isImageChanged: boolean;
	setIsImageChanged: React.Dispatch<React.SetStateAction<boolean>>;
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
	isFormChange: boolean;
	setIsFormChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export function EditEmployerContainer({
	existingImage,
	setIsImageChanged,
	isImageChanged,
	setImageUrl,
	isFormChange,
	setIsFormChange,
}: EditEmployerContainerProps) {
	const { t } = useTranslation();
	const { data, isLoading } = useEditEmployerProfile({ setImageUrl });

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
				<EditEmployerForm
					profile={data}
					isLoading={isLoading}
					imageUrl={existingImage}
					isImageChanged={isImageChanged}
					isFormChange={isFormChange}
					setIsFormChange={setIsFormChange}
				/>
			</FlexContainer>
		</Container>
	);
}

export default EditEmployerContainer;
