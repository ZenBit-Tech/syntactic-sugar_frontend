import { useTranslation } from "react-i18next";
import { useAppDispatch } from "src/redux/hooks";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledPage, Container, Buttons } from "./styles";
import { StyledButton, ThemeColors, BaseTitle, StyledParagraph } from "@freelance/components";
import { ThemeProvider } from "styled-components";
import { Input } from "antd";
import "antd/dist/antd.css";
import { useCreateProposalMutation } from "redux/sendProposalFreelancer/proposalApi";
import { IProposal } from "src/redux/interfaces/IProposal";
import { schema } from "utils/validations/fileUpload";

const { TextArea } = Input;

export function SendProposal() {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		control,
		reset,
		formState,
		formState: { errors },
	} = useForm<IProposal>({ resolver: yupResolver(schema) });
	const [createProposal, { isError }] = useCreateProposalMutation({});

	const goBack = () => {
		navigate("/work-details");
	};

	const onSubmit: SubmitHandler<IProposal> = async (values: IProposal) => {
		const data: any = new FormData();
		data.append("file", values.file[0]);
		data.append("coverLetter", values.coverLetter);

		try {
			await createProposal(data);
			if (isError) {
				alert(t("sendProposalFreelancer.alert"));
			}
			await navigate("/search-work");
		} catch (error) {
			alert(error);
		}
	};

	return (
		<ThemeProvider theme={ThemeColors}>
			<StyledPage>
				<Container>
					<form onSubmit={handleSubmit(onSubmit)}>
						<BaseTitle fontSize="lg" tag="h1" fontWeight={500}>
							{t("sendProposalFreelancer.greeting")}
						</BaseTitle>
						<BaseTitle fontSize="md" tag="h2" fontWeight={500}>
							Marketing, Ukraine, 3 years of experience, English: Upper Int, full time work
						</BaseTitle>
						<StyledParagraph fontSize="md">
							{t("sendProposalFreelancer.coverLetter")}
						</StyledParagraph>
						<Controller
							name="coverLetter"
							control={control}
							render={({ field }) => (
								<TextArea
									{...field}
									showCount
									id="coverLetter"
									maxLength={1000}
									style={{ height: 200, width: 500, marginBottom: 10, resize: "none" }}
									placeholder={t("sendProposalFreelancer.placeholderCoverLetter")}
								/>
							)}
							rules={{
								required: true,
								minLength: 100,
							}}
						/>
						{errors.coverLetter && <p>Min 100 symbols</p>}

						<StyledParagraph fontSize="md">{t("sendProposalFreelancer.cv")}</StyledParagraph>
						<input
							type="file"
							id="file"
							accept=".doc, .docs, .pdf"
							{...register("file", { required: true })}
						/>
						{errors.file && <p>Please, add your CV</p>}
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
					</form>
				</Container>
			</StyledPage>
		</ThemeProvider>
	);
}

export default SendProposal;
