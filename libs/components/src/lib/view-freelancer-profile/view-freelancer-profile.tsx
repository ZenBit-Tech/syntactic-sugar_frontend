import { useTranslation } from "react-i18next";
import { IEduResponse, IWorkHistoryResponse } from "redux/createFreelancer/freelancer-pageApi";
import { StyledTitle } from "@freelance/components";
import {
	Container,
	Item,
	ItemContainer,
	Title,
	SkillsWrapper,
} from "./view-freelancer-profile.styled";
import { InstObject } from "redux/jobs";

export interface ViewFreelancerProfileProps {
	fullName?: string;
	category?: InstObject;
	country?: InstObject;
	position?: string;
	employmentType?: string;
	englishLevel?: string;
	workExperience?: string;
	hourRate?: string;
	availableAmountOfHours?: string;
	skills?: InstObject[];
	workHistory?: IWorkHistoryResponse[];
	education?: IEduResponse[];
	otherExperience?: string;
}

export function ViewFreelancerProfile({
	otherExperience,
	education,
	workHistory,
	skills,
	availableAmountOfHours,
	hourRate,
	workExperience,
	englishLevel,
	employmentType,
	position,
	category,
	country,
	fullName,
}: ViewFreelancerProfileProps) {
	const { t } = useTranslation();

	return (
		<Container>
			<StyledTitle tag="h1" fontSize="lg" fontWeight={500}>
				{fullName}
			</StyledTitle>
			<ItemContainer>
				<Item>
					<Title id="country">
						<strong>{t("freelancer.createProfile.selectOption.country")}</strong>
					</Title>
					<p>{country?.name}</p>
				</Item>
				<Item>
					<Title id="category">
						<strong>{t("freelancer.createProfile.selectOption.category")}</strong>
					</Title>
					<p>{category?.name}</p>
				</Item>
				<Item>
					<Title id="position">
						<strong>{t("freelancer.createProfile.positionPlaceholder")}</strong>
					</Title>
					<p>{position}</p>
				</Item>
				<Item>
					<Title id="employment">
						<strong>{t("freelancer.viewProfile.employmentType")}</strong>
					</Title>
					<p>{employmentType}</p>
				</Item>
				<Item>
					<Title id="employment">
						<strong>{t("freelancer.createProfile.selectOption.skills")}</strong>
					</Title>
					<SkillsWrapper>
						{skills && skills.map(skill => <p key={skill.id}>{skill.name}</p>)}
					</SkillsWrapper>
				</Item>
				<Item>
					<Title id="workExperience">
						<strong>{t("freelancer.viewProfile.exp")}</strong>
					</Title>
					<p>{workExperience}</p>
				</Item>
				<Item>
					<Title id="rateHour">
						<strong>{t("freelancer.viewProfile.hourRate")}</strong>
					</Title>
					<p>{hourRate}</p>
				</Item>
				<Item>
					<Title id="workingHour">
						<strong>{t("freelancer.viewProfile.workingHours")}</strong>
					</Title>
					<p>{availableAmountOfHours}</p>
				</Item>
				<Item>
					<Title id="englishLevel">
						<strong>{t("freelancer.createProfile.selectOption.englishLevel")}</strong>
					</Title>
					<p>{englishLevel}</p>
				</Item>
				{workHistory &&
					workHistory.map(item => {
						return (
							<Item>
								<Title id="skills">
									<strong>{t("freelancer.viewProfile.workHistory")}</strong>
								</Title>
								<p key={item.id}>{`${item.company}, ${item.period}, ${item.workPosition}`}</p>
							</Item>
						);
					})}
				{education &&
					education.map(item => {
						return (
							<Item>
								<Title id="skills">
									<strong>{t("freelancer.createProfile.educationLabel")}</strong>
								</Title>
								<p key={item.id}>{`${item.institute}, ${item.occupation}, ${item.period}`}</p>
							</Item>
						);
					})}
				{otherExperience && (
					<Item id="englishLevel">
						<Title id="englishLevel">
							<strong>{t("freelancer.createProfile.otherExperienceLabel")}</strong>
						</Title>
						<p>{otherExperience}</p>
					</Item>
				)}
			</ItemContainer>
		</Container>
	);
}

export default ViewFreelancerProfile;
