import { useTranslation } from "react-i18next";
import { StyledButton, StyledTitle } from "@freelance/components";
import { InstObject } from "redux/jobs";
import { IWorkHistoryResponse, IEduResponse } from "redux/createFreelancer/freelancer-pageApi";
import { Container, ItemContainer, Item, Title, SkillsWrapper } from "./view-profile.styled";

export interface ViewProfileProps {
	fullName?: string;
	category?: InstObject;
	country?: InstObject;
	position?: string;
	employment?: string;
	english?: string;
	experience?: string;
	salary?: string;
	workingHours?: string;
	skills?: InstObject[];
	workHistory?: IWorkHistoryResponse[];
	education?: IEduResponse[];
	otherExp?: string;
	onCancel?: () => void;
	goBack: () => void;
}

export function ViewProfile({
	goBack,
	onCancel,
	otherExp,
	education,
	workHistory,
	skills,
	workingHours,
	salary,
	experience,
	english,
	employment,
	position,
	category,
	country,
	fullName,
}: ViewProfileProps) {
	const { t } = useTranslation();

	return (
		<Container>
			<StyledTitle tag="h1" fontSize="lg" fontWeight={500}>
				{`${fullName}'s ${t("freelancer.viewProfile.profile")}`}
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
					<p>{employment}</p>
				</Item>
				<Item>
					<Title id="skills">
						<strong>{t("freelancer.createProfile.selectOption.skills")}</strong>
					</Title>
					<SkillsWrapper>
						{skills?.map(skill => (
							<p key={skill.id}>{skill.name}</p>
						))}
					</SkillsWrapper>
				</Item>
				<Item>
					<Title id="workExperience">
						<strong>{t("freelancer.viewProfile.exp")}</strong>
					</Title>
					<p>{experience}</p>
				</Item>

				<Item>
					<Title id="rateHour">
						<strong>{t("freelancer.viewProfile.hourRate")}</strong>
					</Title>
					<p>{salary}</p>
				</Item>
				<Item>
					<Title id="workingHour">
						<strong>{t("freelancer.viewProfile.workingHours")}</strong>
					</Title>
					<p>{workingHours}</p>
				</Item>
				<Item>
					<Title id="englishLevel">
						<strong>{t("freelancer.createProfile.selectOption.englishLevel")}</strong>
					</Title>
					<p>{english}</p>
				</Item>
				{/* {otherExp && (
					<Item id="other">
						<Title id="skills">
							<strong>{t("freelancer.createProfile.otherExperienceLabel")}</strong>
						</Title>
						<p>{otherExp}</p>
					</Item>
				)} */}

				{/* {workHistory?.length && (
					<Item>
						<Title id="skills">
							<strong>{t("freelancer.viewProfile.workHistory")}</strong>
						</Title>
						<>
							{workHistory?.map(item => {
								<p key={item.id}>{`${item.company}, ${item.period}, ${item.workPosition}`}</p>;
							})}
						</>
					</Item>
				)}
				{education?.length && (
					<Item>
						<Title id="skills">
							<strong>{t("freelancer.createProfile.educationLabel")}</strong>
						</Title>
						{education?.map(item => (
							<p key={item.id}>{`${item.institute}, ${item.occupation}, ${item.period}`}</p>
						))}
					</Item> */}
				{/* )} */}
			</ItemContainer>
			<StyledButton
				type="button"
				buttonColor="redGradient"
				buttonSize="sm"
				fontSize="md"
				onClick={goBack}
			>
				<strong>{t("freelancer.createProfile.backBtn")}</strong>
			</StyledButton>
		</Container>
	);
}

export default ViewProfile;
