import {
	Page,
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

interface INewJobPostingProps {
	page: Page;
	goBackLink: string;
	title?: React.ReactNode;
	subTitle?: React.ReactNode;
	createButton?: boolean;
}

export function JobPostingContainer({
	page,
	goBackLink,
	title,
	subTitle,
	createButton,
}: INewJobPostingProps) {
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
						{page === SECOND_PAGE && <JobPostingSecondForm page={page} />}
						{page === THIRD_PAGE && <JobPostingThirdForm page={page} />}
					</FormWrapper>
					<ButtonContainer>
						<FormButton
							type="submit"
							form={page}
							onClick={() => goBack(goBackLink)}
							buttonSize="sm"
							buttonColor="redGradient"
						>
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
