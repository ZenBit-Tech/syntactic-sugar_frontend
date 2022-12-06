import { useTranslation } from "react-i18next";
import { useAppDispatch } from "src/redux/hooks";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { StyledPage, Container } from "./styles";
import { StyledButton, ThemeColors, BaseTitle } from "@freelance/components";
import { ThemeProvider } from "styled-components";
import { Input } from "antd";
import "antd/dist/antd.css";
import { IFormInput } from "./interfaces";

const { TextArea } = Input;

export function SendProposal() {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { register, handleSubmit, control, reset } = useForm<IFormInput>();

	const goBack = () => {
		navigate("/work-details");
	};
	const onSubmit: SubmitHandler<IFormInput> = values => {
		console.log(values);
	};

	return (
		<ThemeProvider theme={ThemeColors}>
			<StyledPage>
				<Container>
					<form onSubmit={handleSubmit(onSubmit)}>
						<BaseTitle fontSize="lg" tag="h1" fontWeight={500}>
							{t("sendProposalFreelancer.greeting")}
						</BaseTitle>
						<h3>Marketing, Ukraine, 3 years of experience, English: Upper Int, full time work</h3>
						<p>Cover letter</p>
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
									placeholder="cover letter"
								/>
							)}
						/>
						<label htmlFor="file">Add your CV:</label>
						<input type="file" id="file" accept=".doc, .docs, .pdf" {...register("cv")} />
						<StyledButton buttonSize="sm" buttonColor="redGradient" type="button" onClick={goBack}>
							Go back
						</StyledButton>
						<StyledButton buttonSize="sm" buttonColor="redGradient" type="submit">
							Send proposal
						</StyledButton>
					</form>
				</Container>
			</StyledPage>
		</ThemeProvider>
	);
}

export default SendProposal;
