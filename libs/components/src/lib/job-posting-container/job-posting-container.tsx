import {
	StyledPage,
	ThemeBackground,
	ThemeColors,
	StyledTitle,
	JobPostingFirstForm,
	JobPostingSecondForm,
	JobPostingThirdForm,
} from "@freelance/components";
import { ThemeProvider } from "styled-components";
import { FIRST_PAGE, SECOND_PAGE, THIRD_PAGE } from "utils/constants/breakpoint";
import {
	ButtonContainer,
	Description,
	FormButton,
	FormWrapper,
	PageContainer,
	JobPostingStyledTitle,
} from "./job-posting-container.styled";
import { useJobPostingContainerHook } from "./job-posting-containerHooks";

type Page = "firstPage" | "secondPage" | "thirdPage";

interface INewJobPostingProps {
	page: Page;
	title?: React.ReactNode;
	subTitle?: React.ReactNode;
	createButton?: boolean;
}

export function JobPostingContainer({ page, title, subTitle, createButton }: INewJobPostingProps) {
	const { description, goBackButton, createButtonText, continueButton, goBack } =
		useJobPostingContainerHook();

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<StyledPage>
				<PageContainer>
					{title && (
						<JobPostingStyledTitle tag="h1" fontWeight={700} fontSize="lg">
							{title}
						</JobPostingStyledTitle>
					)}
					{subTitle && (
						<StyledTitle tag="h1" fontWeight={400} fontSize="lg">
							{subTitle}
						</StyledTitle>
					)}
					{(page === SECOND_PAGE || page === THIRD_PAGE) && (
						<Description fontSize="lg">{description}</Description>
					)}
					<FormWrapper>
						{page === FIRST_PAGE && <JobPostingFirstForm page={page} />}
						{page === SECOND_PAGE && <JobPostingSecondForm />}
						{page === THIRD_PAGE && <JobPostingThirdForm />}
					</FormWrapper>
					<ButtonContainer>
						<FormButton type="button" onClick={goBack} buttonSize="sm" buttonColor="redGradient">
							{goBackButton}
						</FormButton>
						<FormButton type="submit" form={page} buttonSize="sm" buttonColor="redGradient">
							{createButton ? createButtonText : continueButton}
						</FormButton>
					</ButtonContainer>
				</PageContainer>
			</StyledPage>
		</ThemeProvider>
	);
}

export default JobPostingContainer;
