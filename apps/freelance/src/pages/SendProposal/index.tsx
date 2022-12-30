import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
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
import { useOptions } from "utils/select-options/options";
import {
	Page,
	Container,
	Buttons,
	FileUpload,
	Form,
	Title,
	Label,
	Textarea,
	SelectElement,
} from "./styles";
import { IFormValues } from "./IFormValues";
import { useSendProposal } from "./sendProposalHook";
import { formats } from "./formats";

export function SendProposal() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { hourRate } = useOptions();
	const {
		register,
		handleSubmit,
		control,
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
						<Controller
							name="hourRate"
							control={control}
							render={({ field }) => (
								<SelectElement
									options={hourRate}
									{...field}
									isSearchable
									isClearable
									classNamePrefix="react-select"
									placeholder={t("freelancer.createProfile.selectOption.hourRate")}
								/>
							)}
						/>

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
