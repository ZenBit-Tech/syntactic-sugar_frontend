import { useTranslation } from "react-i18next";
import { SettingOutlined } from "@ant-design/icons";
import { ROLES } from "utils/constants/roles";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { IResponseEmployer } from "redux/createEmployer/employerApi";
import { CREATE_PROFILE } from "utils/constants/breakpoint";
import {
	StyledButton,
	StyledParagraph,
	FlexContainer,
	useLogout,
	CardModal,
	Chat,
	EditEmployerContainer,
	EditFreelancerContainer,
} from "@freelance/components";
import {
	Container,
	UserInfoWrapper,
	ButtonsWrapper,
	UserDetails,
	StyledEditButton,
} from "./dashboard-header.styled";
import { useChat } from "./dashboard-headerChatHooks";
import { useDashboardHeader } from "./dashboard-headerHook";

export interface DashboardHeaderProps {
	userRole: "freelancer" | "employer";
	typePage?: "createProfile" | "main" | "proposals" | "employerJobs" | "jobs" | "talents";
	profile?: IResponse | IResponseEmployer;
}

export function DashboardHeader({ userRole, typePage, profile }: DashboardHeaderProps) {
	const { t } = useTranslation();
	const { handleLogout } = useLogout();
	const {
		imageUrl,
		existingImage,
		name,
		email,
		setImageUrl,
		isEditModalOpen,
		openEditProfileModal,
		closeEditProofileModal,
	} = useDashboardHeader(profile);
	const { openChat, closeChat, chatModalOpen } = useChat();

	return (
		<Container>
			{typePage === CREATE_PROFILE && <UserInfoWrapper />}
			{typePage !== CREATE_PROFILE && (
				<UserInfoWrapper>
					<img src={existingImage} alt="User Avatar" />
					<UserDetails>
						<StyledParagraph fontSize="lg">
							<strong>{name}</strong>
						</StyledParagraph>
						<StyledEditButton onClick={openEditProfileModal}>
							<FlexContainer alignItems="center" gap={10}>
								<StyledParagraph fontSize="md">{email}</StyledParagraph>
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

			{userRole === ROLES.EMPLOYER && (
				<CardModal open={isEditModalOpen} onCancel={closeEditProofileModal} width={1000}>
					<EditEmployerContainer existingImage={imageUrl} setImageUrl={setImageUrl} />
				</CardModal>
			)}
			{userRole === ROLES.FREELANCER && (
				<CardModal open={isEditModalOpen} onCancel={closeEditProofileModal} width={1000}>
					<EditFreelancerContainer existingImage={imageUrl} setImageUrl={setImageUrl} />
				</CardModal>
			)}
			<CardModal open={chatModalOpen} onCancel={closeChat} width={800}>
				<Chat userType={userRole} userId={profile?.id} />
			</CardModal>
		</Container>
	);
}

export default DashboardHeader;
