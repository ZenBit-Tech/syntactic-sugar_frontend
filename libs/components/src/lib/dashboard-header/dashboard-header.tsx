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
import { baseUrl } from "utils/constants/redux-query";
import { DEFAULT_IMAGE } from "utils/constants/links";
import {
	Container,
	UserInfoWrapper,
	ButtonsWrapper,
	UserDetails,
	StyledEditButton,
} from "./dashboard-header.styled";
import { useChat } from "./dashboard-headerChatHooks";
import { useDashboardHeader } from "./dashboard-headerHook";
import { Badge } from "antd";

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
		setIsImageChanged,
		isEditModalOpen,
		isImageChanged,
		isFormChange,
		chatNotifications,
		setIsFormChange,
		openEditProfileModal,
		closeEditProofileModal,
	} = useDashboardHeader(profile);
	const { openChat, closeChat, chatModalOpen } = useChat();

	return (
		<Container>
			{typePage === CREATE_PROFILE && <UserInfoWrapper />}
			{typePage !== CREATE_PROFILE && (
				<UserInfoWrapper>
					<img
						src={existingImage === DEFAULT_IMAGE ? DEFAULT_IMAGE : baseUrl + existingImage}
						alt="User Avatar"
					/>
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
					<Badge count={chatNotifications}>
						<StyledButton buttonSize="chat" buttonColor="lightRed" fontSize="md" onClick={openChat}>
							{t("dashboard.header.chat")}
							<img src="/assets/images/chat_btn_icon.png" alt="Chat Icon" />
						</StyledButton>
					</Badge>
					<StyledButton
						buttonSize="filter"
						buttonColor="darkRed"
						fontSize="md"
						onClick={handleLogout}
					>
						{t("dashboard.header.logout")}
						<img src="/assets/images/logout_btn_icon.png" alt="Logout Icon" />
					</StyledButton>
				</ButtonsWrapper>
			)}
			{userRole === ROLES.EMPLOYER && (
				<ButtonsWrapper>
					<Badge count={chatNotifications}>
						<StyledButton buttonSize="chat" buttonColor="lightRed" fontSize="md" onClick={openChat}>
							{t("dashboard.header.chat")}
							<img src="/assets/images/chat_btn_icon.png" alt="Chat Icon" />
						</StyledButton>
					</Badge>
					<StyledButton
						buttonSize="filter"
						buttonColor="darkRed"
						fontSize="md"
						onClick={handleLogout}
					>
						{t("dashboard.header.logout")}
						<img src="/assets/images/logout_btn_icon.png" alt="Logout Icon" />
					</StyledButton>
				</ButtonsWrapper>
			)}

			{/* Modals */}

			{userRole === ROLES.EMPLOYER && (
				<CardModal open={isEditModalOpen} onCancel={closeEditProofileModal} width={1000}>
					<EditEmployerContainer
						existingImage={imageUrl}
						setImageUrl={setImageUrl}
						setIsImageChanged={setIsImageChanged}
						isImageChanged={isImageChanged}
						isFormChange={isFormChange}
						setIsFormChange={setIsFormChange}
					/>
				</CardModal>
			)}
			{userRole === ROLES.FREELANCER && (
				<CardModal open={isEditModalOpen} onCancel={closeEditProofileModal} width={1000}>
					<EditFreelancerContainer
						existingImage={imageUrl}
						setImageUrl={setImageUrl}
						setIsImageChanged={setIsImageChanged}
						isImageChanged={isImageChanged}
						isFormChange={isFormChange}
						setIsFormChange={setIsFormChange}
					/>
				</CardModal>
			)}
			<CardModal open={chatModalOpen} onCancel={closeChat} width={800}>
				<Chat userType={userRole} userId={profile?.id} />
			</CardModal>
		</Container>
	);
}

export default DashboardHeader;
