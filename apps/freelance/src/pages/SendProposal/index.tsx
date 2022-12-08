import { useTranslation } from "react-i18next";
import { useAppDispatch } from "src/redux/hooks";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Page, Container, Buttons, FileUpload, Form, Title, SubTitle, Label } from "./styles";
import { StyledButton, ThemeColors } from "@freelance/components";
import { ThemeProvider } from "styled-components";
import { useCreateProposalMutation } from "redux/sendProposalFreelancer/proposalApi";
import { IProposal } from "src/redux/interfaces/IProposal";
import { schema } from "utils/validations/fileUpload";
import { Textarea } from "./styles";

export function SendProposal() {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<IProposal>();
	const [createProposal, { isError }] = useCreateProposalMutation({});

	const goBack = () => {
		navigate("/work-details");
	};

	const onSubmit = async (values: IProposal) => {
		const data: any = new FormData();
		data.append("file", values.file[0]);
		data.append("coverLetter", values.coverLetter);
		console.log("click");

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
			<Page>
				<Container>
					<Title fontSize="lg" tag="h1" fontWeight={700}>
						{t("sendProposalFreelancer.greeting")}
					</Title>
					<SubTitle fontSize="md" tag="h3" fontWeight={500}>
						Marketing, Ukraine, 3 years of experience, English: Upper Int, full time work
					</SubTitle>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Label>{t("sendProposalFreelancer.coverLetter")}</Label>
						<Controller
							name="coverLetter"
							control={control}
							render={({ field }) => (
								<Textarea
									{...field}
									// showCount
									id="coverLetter"
									rows={10}
									maxLength={1000}
									minLength={100}
									placeholder={t("sendProposalFreelancer.placeholderCoverLetter")}
								/>
							)}
							rules={{
								required: true,
								minLength: 100,
							}}
						/>

						<FileUpload>
							<Label>{t("sendProposalFreelancer.cv")}</Label>
							<input
								type="file"
								id="file"
								accept=".doc, .docs, .pdf"
								{...register("file", { required: true })}
							/>
						</FileUpload>
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
