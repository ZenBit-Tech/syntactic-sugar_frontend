import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ErrorsHandlerWrapper, StyledButton, StyledSpan } from "@freelance/components";
import { useCreateProposalMutation } from "redux/sendProposalFreelancer/proposalApi";
import { IProposal } from "redux/interfaces/IProposal";
import { formats } from "./formats";
import {
	FileUpload,
	Form,
	Title,
	InputRate,
	Label,
	Textarea,
	ButtonWrapper,
	ContainerBox,
} from "./send-proposal.styled";

export interface SendProposalProps {
	id: string;
	onCancel?: () => void;
	goBack?: () => void;
	saveCoverLetter?: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
	inputText?: string;
}

export function SendProposal({
	id,
	onCancel,
	goBack,
	saveCoverLetter,
	inputText,
}: SendProposalProps) {
	const { t } = useTranslation();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IProposal>({ criteriaMode: "all", mode: "onChange", shouldFocusError: true });
	const [createProposal, { isError }] = useCreateProposalMutation();

	const onSubmit = async (values: IProposal) => {
		const data: any = new FormData();
		data.append("file", values.file[0]);
		data.append("coverLetter", values.coverLetter);
		data.append("id", id);
		data.append("hourRate", values.hourRate);

		try {
			await createProposal(data);
			if (isError) {
				alert(t("sendProposalFreelancer.alert"));
			}
			if (onCancel) {
				onCancel();
			}
		} catch (error) {
			alert(error);
		}
	};

	return (
		<ContainerBox>
			<Title fontSize="lg" tag="h1" fontWeight={700}>
				{t("sendProposalFreelancer.greeting")}
			</Title>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<ErrorsHandlerWrapper positionRight={60} width={15}>
					<Label>{t("sendProposalFreelancer.rateLabel")}</Label>
					<InputRate
						type="number"
						{...register("hourRate", {
							min: {
								value: 100,
								message: `${t("sendProposalFreelancer.minRate")}`,
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
				<ErrorsHandlerWrapper positionRight={-5} width={15}>
					<Label>{t("sendProposalFreelancer.coverLetter")}</Label>
					<Textarea
						{...register("coverLetter", {
							onChange: saveCoverLetter,
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
						defaultValue={inputText}
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
				<ErrorsHandlerWrapper positionRight={60} width={15}>
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
				<ButtonWrapper>
					<StyledButton
						buttonSize="sm"
						fontSize="md"
						buttonColor="redGradient"
						type="button"
						onClick={goBack || onCancel}
					>
						{t("sendProposalFreelancer.back")}
					</StyledButton>
					<StyledButton buttonSize="sm" fontSize="md" buttonColor="redGradient" type="submit">
						{t("sendProposalFreelancer.send")}
					</StyledButton>
				</ButtonWrapper>
			</Form>
		</ContainerBox>
	);
}

export default SendProposal;
