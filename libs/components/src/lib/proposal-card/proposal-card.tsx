import { useTranslation } from "react-i18next";
import moment from "moment";
import {
	StyledJobCard,
	ImageContainer,
	JobCardHeader,
	FlexContainer,
	GridContainer,
	CardTitleButton,
	StyledParagraph,
	EmployerButtonWrapper,
	StyledButton,
	DateWrapper,
} from "@freelance/components";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { baseUrl } from "utils/constants/redux-query";

export interface ProposalCardProps {
	id: string;
	coverLetter?: string;
	hourRate?: string;
	filePath?: string;
	createdDate?: string;
	freelancerId?: string;
	freelancerName?: string;
	freelancerImage?: string;
}

export function ProposalCard({
	id,
	coverLetter,
	hourRate,
	filePath,
	createdDate,
	freelancerId,
	freelancerName,
	freelancerImage,
}: ProposalCardProps) {
	const { t } = useTranslation();
	const prettyDate = moment(createdDate).format("LL");

	return (
		<StyledJobCard>
			<JobCardHeader alignItems="center">
				<FlexContainer gap={10}>
					<ImageContainer proposalCard>
						<img
							src={freelancerImage ? baseUrl + freelancerImage : DEFAULT_IMAGE}
							alt="User Avatar"
						/>
					</ImageContainer>
					<GridContainer>
						<CardTitleButton>{freelancerName}</CardTitleButton>
						<StyledParagraph fontSize="md">{hourRate}</StyledParagraph>
					</GridContainer>
				</FlexContainer>
				<GridContainer gap={10}>
					<EmployerButtonWrapper>
						<StyledButton buttonColor="redGradient" buttonSize="lg" fontSize="md">
							<strong>{t("proposalCard.startChat")}</strong>
						</StyledButton>
					</EmployerButtonWrapper>
					<EmployerButtonWrapper>
						<StyledButton buttonColor="redGradient" buttonSize="lg" fontSize="md">
							<strong>{t("proposalCard.proposalDetails")}</strong>
						</StyledButton>
					</EmployerButtonWrapper>
				</GridContainer>
				<GridContainer justifyItems="center">
					<DateWrapper fontSize="md">
						<strong>{prettyDate}</strong>
					</DateWrapper>
				</GridContainer>
			</JobCardHeader>
		</StyledJobCard>
	);
}

export default ProposalCard;
