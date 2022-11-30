import { Container } from "./form-container.styled";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
	FormHeader,
	StyledParagraph,
	LoginForm,
	SignupForm,
	RecoverPassFirstForm,
	RecoverPasswordSecondForm,
	StyledButton,
	RoleSelectionForm,
} from "@freelance/components";
import { useGoogleAuthentication } from "./form-containerHooks";
import {
	LOG_IN,
	RECOVER_PASSWORD_1,
	RECOVER_PASSWORD_2,
	ROLE_SELECTION,
	SIGN_UP,
} from "utils/constants/breakpoint";

export interface FormContainerProps {
	title: React.ReactNode;
	subTitle: React.ReactNode;
	signText?: React.ReactNode;
	signLink?: React.ReactNode;
	forgotPassText?: React.ReactNode;
	forgotPassLink?: React.ReactNode;
	isRightSide: boolean;
	isSignForm: boolean;
	formType: "login" | "signup" | "recoverPass1" | "recoverPass2" | "roleSelection";
}

export function FormContainer({
	isRightSide,
	title,
	subTitle,
	isSignForm,
	formType,
	signText,
	signLink,
	forgotPassText,
	forgotPassLink,
}: FormContainerProps) {
	const { t } = useTranslation();
	const handleSuccess = useGoogleAuthentication(isRightSide);
	const handleLoginButtonClick = () => {
		handleSuccess();
	};

	return (
		<Container isRightSide={isRightSide}>
			<FormHeader title={title} subTitle={subTitle} isSignForm={isSignForm} />
			{formType === LOG_IN && <LoginForm />}
			{formType === SIGN_UP && <SignupForm />}
			{formType === RECOVER_PASSWORD_1 && <RecoverPassFirstForm />}
			{formType === RECOVER_PASSWORD_2 && <RecoverPasswordSecondForm />}
			{formType === ROLE_SELECTION && <RoleSelectionForm />}
			<StyledParagraph fontSize="md">
				{signText}
				{isRightSide || !isSignForm ? (
					<Link to="/">
						<strong>{signLink}</strong>
					</Link>
				) : (
					<Link to="/signup">
						<strong>{signLink}</strong>
					</Link>
				)}
			</StyledParagraph>
			<StyledParagraph fontSize="md">
				{forgotPassText}
				<Link to="/recover-password">
					<strong>{forgotPassLink}</strong>
				</Link>
			</StyledParagraph>
			{isSignForm && (
				<StyledButton
					onClick={handleLoginButtonClick}
					id="googleBtn"
					buttonSize="md"
					buttonColor="blue"
				>
					<img src="/assets/images/google_logo.png" alt="Google Logo" />
					{t("signForm.buttonGoogle")}
				</StyledButton>
			)}
		</Container>
	);
}

export default FormContainer;
