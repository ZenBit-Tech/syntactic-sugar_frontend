import { useTranslation } from "react-i18next";
import { GridContainer, FlexContainer } from "@freelance/components";
import { StyledFileButton, StyledFileImage } from "./styled-file-field.styled";
import { useStyledFileField } from "./styled-file-fieldHook";

export interface StyledFileFieldProps {
	imageUrl: string;
	width?: number;
	defaultImage: string;
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

export function StyledFileField({
	imageUrl,
	width,
	defaultImage,
	setImageUrl,
}: StyledFileFieldProps) {
	const { t } = useTranslation();
	const { setDefaultImage, onSubmitFile } = useStyledFileField({
		defaultImage,
		setImageUrl,
	});

	return (
		<GridContainer width={width} gap={10}>
			<StyledFileImage src={imageUrl} alt="User Avatar" />
			<FlexContainer justifyContent="center" gap={10}>
				<StyledFileButton>
					{t("image.chooseImage")}
					<input id="fileInput" type="file" accept=".png, .jpg, .jpeg" onChange={onSubmitFile} />
				</StyledFileButton>
				<StyledFileButton>
					{t("image.resetImage")}
					<input type="button" onClick={setDefaultImage} />
				</StyledFileButton>
			</FlexContainer>
		</GridContainer>
	);
}

export default StyledFileField;
