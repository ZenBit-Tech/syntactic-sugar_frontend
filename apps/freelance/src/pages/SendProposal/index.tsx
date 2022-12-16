import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { ThemeProvider } from "styled-components";
import { useAppDispatch } from "redux/hooks";
import { IResponse } from "redux/createFreelancer/freelancer-pageApi";
import { StyledButton, ThemeColors, StyledParagraph } from "@freelance/components";
import { useCreateProposalMutation } from "redux/sendProposalFreelancer/proposalApi";
import { IProposal } from "src/redux/interfaces/IProposal";
import { schema } from "utils/validations/fileUpload";
import { WORK_DETAILS, SEARCH_WORK } from "src/utils/constants/breakpoint";
import { useGetFreelancerQuery } from "src/redux/createFreelancer/freelancer-pageApi";
import {
	Page,
	Container,
	Buttons,
	FileUpload,
	Form,
	Title,
	SubTitle,
	Label,
	Textarea,
	Span,
} from "./styles";

export function SendProposal() {
	const [profile, setProfile] = useState();
	const { data: any } = useGetFreelancerQuery();

	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<IProposal>({ resolver: yupResolver(schema) });
	const [createProposal, { isError }] = useCreateProposalMutation({});

	useEffect(() => {
		setProfile(data);
	}, [data]);

	const goBack = () => {
		navigate(WORK_DETAILS);
	};

	const onSubmit = async (values: IProposal) => {
		const data: any = new FormData();
		data.append("file", values.file[0]);
		data.append("coverLetter", values.coverLetter);

		try {
			await createProposal(data);
			if (isError) {
				alert(t("sendProposalFreelancer.alert"));
			}
			navigate(SEARCH_WORK);
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
					<SubTitle fontSize="md" tag="h3" fontWeight={700}>
						{data?.fullName}
					</SubTitle>
					<StyledParagraph fontSize="md">{data?.category}</StyledParagraph>

					<Form onSubmit={handleSubmit(onSubmit)}>
						<Label>{t("sendProposalFreelancer.coverLetter")}</Label>
						<Textarea
							{...register("coverLetter")}
							rows={10}
							maxLength={1000}
							placeholder={t("sendProposalFreelancer.placeholderCoverLetter")}
						/>
						{errors?.coverLetter && (
							<Span>
								<strong>{errors?.coverLetter?.message}</strong>
							</Span>
						)}

						<FileUpload>
							<Label>{t("sendProposalFreelancer.cv")}</Label>
							<input type="file" id="file" accept=".doc, .docs, .pdf" {...register("file")} />
							{errors?.file && (
								<Span>
									<strong>{errors?.file?.message}</strong>
								</Span>
							)}
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
