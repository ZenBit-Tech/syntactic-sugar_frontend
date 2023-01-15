import { useTranslation } from "react-i18next";
import { SettingOutlined } from "@ant-design/icons";
import { StyledButton, StyledParagraph, FlexContainer } from "@freelance/components";
import { ROLES } from "utils/constants/roles";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { IResponseEmployer } from "redux/createEmployer/employerApi";
import { baseUrl } from "utils/constants/redux-query";
import { DEFAULT_IMAGE } from "utils/constants/links";
import { CREATE_PROFILE } from "utils/constants/breakpoint";
import { useLogout, CardModal, Chat, EditUserProfile } from "@freelance/components";
import {
	Container,
	UserInfoWrapper,
	ButtonsWrapper,
	UserDetails,
	StyledEditButton,
} from "./dashboard-header.styled";
import { useChat } from "./dashboard-headerChatHooks";
import { useEditProfile } from "./dashboard-headerEditProfileHook";

export interface DashboardHeaderProps {
	userRole: "freelancer" | "employer";
	typePage?: "createProfile" | "main" | "proposals" | "employerJobs" | "jobs" | "talents";
	profile?: IResponse | IResponseEmployer;
}

export function DashboardHeader({ userRole, typePage, profile }: DashboardHeaderProps) {
	const { t } = useTranslation();
	const { handleLogout } = useLogout();
	const { isEditModalOpen, openEditProfileModal, closeEditProofileModal } = useEditProfile();
	const { openChat, closeChat, chatModalOpen } = useChat();

	return (
		<Container>
			{typePage === CREATE_PROFILE && <UserInfoWrapper />}
			{typePage !== CREATE_PROFILE && (
				<UserInfoWrapper>
					<img
						src={
							profile?.image && profile?.image?.length > 0
								? baseUrl + profile?.image
								: DEFAULT_IMAGE
						}
						alt="User Avatar"
					/>
					<UserDetails>
						<StyledParagraph fontSize="lg">
							<strong>{profile?.fullName}</strong>
						</StyledParagraph>
						<StyledEditButton onClick={openEditProfileModal}>
							<FlexContainer alignItems="center" gap={10}>
								<StyledParagraph fontSize="md">{profile?.user?.email}</StyledParagraph>
								<SettingOutlined />
							</FlexContainer>
						</StyledEditButton>
					</UserDetails>
				</UserInfoWrapper>
			)}
			{userRole === ROLES.FREELANCER && (
				<ButtonsWrapper>
					<StyledButton buttonSize="md" buttonColor="lightRed" fontSize="md" onClick={openChat}>
						{t("dashboard.header.chat")}
						<img src="/assets/images/chat_btn_icon.png" alt="Chat Icon" />
					</StyledButton>
					<StyledButton buttonSize="md" buttonColor="darkRed" fontSize="md" onClick={handleLogout}>
						{t("dashboard.header.logout")}
						<img src="/assets/images/logout_btn_icon.png" alt="Logout Icon" />
					</StyledButton>
				</ButtonsWrapper>
			)}
			{userRole === ROLES.EMPLOYER && (
				<ButtonsWrapper>
					<StyledButton buttonSize="md" buttonColor="lightRed" fontSize="md" onClick={openChat}>
						{t("dashboard.header.chat")}
						<img src="/assets/images/chat_btn_icon.png" alt="Chat Icon" />
					</StyledButton>
					<StyledButton buttonSize="md" buttonColor="darkRed" fontSize="md" onClick={handleLogout}>
						{t("dashboard.header.logout")}
						<img src="/assets/images/logout_btn_icon.png" alt="Logout Icon" />
					</StyledButton>
				</ButtonsWrapper>
			)}

			{/* Modals */}

			<CardModal open={isEditModalOpen} onCancel={closeEditProofileModal} width={1000}>
				<EditUserProfile />
			</CardModal>
			<CardModal open={chatModalOpen} onCancel={closeChat} width={800}>
				<Chat userType={userRole} userId={profile?.id} />
			</CardModal>
		</Container>
	);
}

export default DashboardHeader;
