import { useTranslation } from "react-i18next";
import { StyledTitle, StyledParagraph, StyledButton } from "@freelance/components";
import styled from "styled-components";
import {
	Container,
	StyledJobCard,
	StyledJobCardHeader,
	StyledJobCardParagraph,
	StyledJobCardHeaderLeft,
} from "./job-card.styled";

/* eslint-disable-next-line */
export interface JobCardProps {
	position: string;
	location: string;
	employmentType: string;
	availableAmountOfHours: string;
	workExperience: string;
	levelEnglish: string;
	date: string;
	userType: string;
	jobActive: boolean;
}

export function JobCard({
	position,
	location,
	employmentType,
	availableAmountOfHours,
	workExperience,
	levelEnglish,
	date,
	userType,
	jobActive,
}: JobCardProps) {
	const { t } = useTranslation();

	return (
		<Container>
			<StyledJobCard>
				<StyledTitle tag="h2" fontWeight={800} fontSize="md">
					<StyledJobCardHeader>
						<strong>{position}</strong>
						<StyledJobCardHeaderLeft>
							<strong>{date}</strong>
							{userType === "freelancer" && jobActive && (
								<StyledButton buttonColor="redGradient" buttonSize="sm" fontSize="md">
									<strong>{t("jobCard.sendProposal")}</strong>
								</StyledButton>
							)}
							{userType === "employer" && jobActive && (
								<StyledButton buttonColor="redGradient" buttonSize="sm" fontSize="md">
									<strong>{t("jobCard.publishJob")}</strong>
								</StyledButton>
							)}
						</StyledJobCardHeaderLeft>
					</StyledJobCardHeader>
				</StyledTitle>
				<StyledParagraph fontSize="md">
					<StyledJobCardParagraph>
						<strong>{location}</strong>
						<strong>{employmentType}</strong>
						<strong>{availableAmountOfHours}</strong>
						<strong>{workExperience}</strong>
						<strong>{levelEnglish}</strong>
					</StyledJobCardParagraph>
				</StyledParagraph>
			</StyledJobCard>
		</Container>
	);
}

export default JobCard;
