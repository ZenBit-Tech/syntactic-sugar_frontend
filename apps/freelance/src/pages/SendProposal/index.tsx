import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
	StyledButton,
	ThemeColors,
	ThemeBackground,
	StyledSpan,
	ErrorsHandlerWrapper,
} from "@freelance/components";
import {
	Page,
	Container,
	Buttons,
	FileUpload,
	Form,
	Title,
	Label,
	Textarea,
	InputRate,
} from "./styles";
import { IFormValues } from "./IFormValues";
import { useSendProposal } from "./sendProposalHook";
import { formats } from "./formats";

export function SendProposal() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormValues>({ criteriaMode: "all" });
	const { onSubmit } = useSendProposal();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<ThemeProvider theme={ThemeColors && ThemeBackground}>
			<Page>
				<Container>
					<Title fontSize="lg" tag="h1" fontWeight={700}>
						{t("sendProposalFreelancer.greeting")}
					</Title>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<ErrorsHandlerWrapper positionRight={-20} width={15}>
							<InputRate
								type="number"
								{...register("hourRate", {
									pattern: {
										value: /100/,
										message: "Min rate 100$",
									},
								})}
								placeholder={t("freelancer.createProfile.selectOption.hourRate")}
							/>
							<ErrorMessage
								errors={errors}
								name="hourRate"
								render={({ message }) => (
									<StyledSpan fontSize="sm" type="validation">
										<strong>{message}</strong>
									</StyledSpan>
								)}
							/>
						</ErrorsHandlerWrapper>
						<ErrorsHandlerWrapper positionRight={-20} width={15}>
							<Label>{t("sendProposalFreelancer.coverLetter")}</Label>
							<Textarea
								{...register("coverLetter", {
									required: `${t("sendProposalFreelancer.required")}`,
									minLength: {
										value: 100,
										message: `${t("sendProposalFreelancer.min")}`,
									},
									maxLength: {
										value: 1000,
										message: `${t("sendProposalFreelancer.max")}`,
									},
								})}
								rows={10}
								maxLength={1000}
								placeholder={t("sendProposalFreelancer.placeholderCoverLetter")}
							/>
							<ErrorMessage
								errors={errors}
								name="coverLetter"
								render={({ messages }) =>
									messages &&
									Object.entries(messages).map(([type, message]) => (
										<StyledSpan fontSize="sm" type="validation" key={type}>
											<strong>{message}</strong>
										</StyledSpan>
									))
								}
							/>
						</ErrorsHandlerWrapper>
						<ErrorsHandlerWrapper positionRight={50} width={20}>
							<FileUpload>
								<Label>{t("sendProposalFreelancer.cv")}</Label>
								<input
									type="file"
									id="file"
									accept=".doc, .docx, .pdf"
									{...register("file", {
										required: `${t("sendProposalFreelancer.required")}`,
										validate: file => {
											if (file.length > 0) {
												return (
													(file &&
														(file[0]?.type === formats.pdf ||
															file[0]?.type === formats.doc ||
															file[0]?.type === formats.docx)) ||
													`${t("sendProposalFreelancer.format")}`
												);
											}

											return true;
										},
									})}
								/>
								<ErrorMessage
									errors={errors}
									name="file"
									render={({ messages }) =>
										messages &&
										Object.entries(messages).map(([type, message]) => (
											<StyledSpan fontSize="sm" type="validation" key={type}>
												<strong>{message}</strong>
											</StyledSpan>
										))
									}
								/>
							</FileUpload>
						</ErrorsHandlerWrapper>
						<Buttons>
							<StyledButton
								buttonSize="sm"
								buttonColor="redGradient"
								type="button"
								onClick={goBack}
							>
								{t("sendProposalFreelancer.back")}
							</StyledButton>
							<StyledButton buttonSize="sm" buttonColor="redGradient" type="submit">
								{t("sendProposalFreelancer.send")}
							</StyledButton>
						</Buttons>
					</Form>
				</Container>
			</Page>
		</ThemeProvider>
	);
}

export default SendProposal;
