import { useTranslation } from "react-i18next";
import { GridContainer, FlexContainer } from "@freelance/components";
import { StyledFileButton, StyledFileImage } from "./styled-file-field.styled";

export interface StyledFileFieldProps {
	imageUrl: string;
	inputKey: string;
	width?: number;
	onSubmit: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
	setDefaultImage: () => void;
}

export function StyledFileField({
	imageUrl,
	inputKey,
	width,
	onSubmit,
	setDefaultImage,
}: StyledFileFieldProps) {
	const { t } = useTranslation();

	return (
		<GridContainer width={width} gap={10}>
			<StyledFileImage src={imageUrl} alt="User Avatar" />
			<FlexContainer justifyContent="center" gap={10}>
				<StyledFileButton>
					{t("image.chooseImage")}
					<input
						id="fileInput"
						key={inputKey}
						type="file"
						accept=".png, .jpg, .jpeg"
						onChange={onSubmit}
					/>
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
