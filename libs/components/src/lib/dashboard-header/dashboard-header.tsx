import { useTranslation } from "react-i18next";
import { StyledButton, StyledParagraph } from "@freelance/components";
import { ROLES } from "utils/constants/roles";
import { useGetFreelancerQuery } from "redux/createFreelancer/freelancer-pageApi";
import { useGetEmployerQuery } from "redux/createEmployer/employerApi";
import { baseUrl } from "utils/constants/redux-query";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { CREATE_PROFILE } from "utils/constants/breakpoint";
import { Container, UserInfoWrapper, ButtonsWrapper, UserDetails } from "./dashboard-header.styled";

export interface DashboardHeaderProps {
	userRole: "freelancer" | "employer";
	typePage?: "createProfile" | "main" | "proposals" | "employerJobs" | "jobs";
}

export function DashboardHeader({ userRole, typePage }: DashboardHeaderProps) {
	const { t } = useTranslation();
	const { data } = userRole === ROLES.FREELANCER ? useGetFreelancerQuery() : useGetEmployerQuery();

	return (
		<Container>
			{typePage === CREATE_PROFILE && <UserInfoWrapper />}
			{typePage !== CREATE_PROFILE && (
				<UserInfoWrapper>
					<img
						src={data && data?.image?.length > 0 ? baseUrl + "/" + data?.image : DEFAULT_IMAGE}
						alt="User Avatar"
					/>
					<UserDetails>
						<StyledParagraph fontSize="lg">
							<strong>{data?.fullName}</strong>
						</StyledParagraph>
						<StyledParagraph fontSize="md">{data?.user?.email}</StyledParagraph>
					</UserDetails>
				</UserInfoWrapper>
			)}
			{userRole === ROLES.FREELANCER && (
				<ButtonsWrapper>
					<StyledButton buttonSize="md" buttonColor="lightRed" fontSize="md">
						{t("dashboard.header.chat")}
						<img src="/assets/images/chat_btn_icon.png" alt="Chat Icon" />
					</StyledButton>
					<StyledButton buttonSize="md" buttonColor="darkRed" fontSize="md">
						{t("dashboard.header.logout")}
						<img src="/assets/images/logout_btn_icon.png" alt="Logout Icon" />
					</StyledButton>
				</ButtonsWrapper>
			)}
			{userRole === ROLES.EMPLOYER && (
				<ButtonsWrapper>
					<StyledButton buttonSize="md" buttonColor="lightRed" fontSize="md">
						{t("dashboard.header.chat")}
						<img src="/assets/images/chat_btn_icon.png" alt="Chat Icon" />
					</StyledButton>
					<StyledButton buttonSize="md" buttonColor="darkRed" fontSize="md">
						{t("dashboard.header.logout")}
						<img src="/assets/images/logout_btn_icon.png" alt="Logout Icon" />
					</StyledButton>
				</ButtonsWrapper>
			)}
		</Container>
	);
}

export default DashboardHeader;
