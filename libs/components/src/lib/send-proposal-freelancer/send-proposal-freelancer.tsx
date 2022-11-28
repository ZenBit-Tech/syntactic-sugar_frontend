import { useTranslation } from "react-i18next";
import { Container } from "./send-proposal-freelancer.styled";
import React from "react";
import { StyledButton } from "@freelance/components";
import { Input } from "antd";

const { TextArea } = Input;

/* eslint-disable-next-line */
export interface SendProposalFreelancerProps {}

export function SendProposalFreelancer(props: SendProposalFreelancerProps) {
	const { t } = useTranslation();
	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		console.log("Change:", e.target.value);
	};

	return (
		<Container>
			<h2>{t("sendProposalFreelancer.greeting")}</h2>
			<h3>Marketing, Ukraine, 3 years of experience, English: Upper Int, full time work</h3>
			<p>Cover letter</p>
			<TextArea
				showCount
				maxLength={1000}
				style={{ height: 200, width: 200, marginBottom: 10 }}
				onChange={onChange}
				placeholder="cover letter"
			/>
			<label htmlFor="file">Other attachments:</label>
			<input type="file" id="file" name="file" accept=".doc, .docs, .pdf" />
			<StyledButton buttonSize="md" buttonColor="redGradient" type="button">
				Go back
			</StyledButton>
			<StyledButton buttonSize="md" buttonColor="redGradient" type="button">
				Send proposal
			</StyledButton>
		</Container>
	);
}

export default SendProposalFreelancer;
