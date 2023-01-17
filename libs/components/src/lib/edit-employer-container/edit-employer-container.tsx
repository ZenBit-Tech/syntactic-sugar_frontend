import { useEffect, useState } from "react";
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
	const [isImageChanged, setIsImageChanged] = useState<boolean>(false);
	const { data, isLoading } = useEditEmployerProfile({ setImageUrl, setIsImageChanged, isOpen });

	useEffect(() => {
		setIsImageChanged(false);
	}, []);

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
				/>
			</FlexContainer>
		</Container>
	);
}

export default EditEmployerContainer;
