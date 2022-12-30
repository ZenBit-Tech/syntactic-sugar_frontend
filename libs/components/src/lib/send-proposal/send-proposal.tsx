import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledButton } from "@freelance/components";
import { useCreateProposalMutation } from "redux/sendProposalFreelancer/proposalApi";
import { IProposal } from "redux/interfaces/IProposal";
import { schema } from "utils/validations/fileUpload";
import {
	FileUpload,
	Form,
	Title,
	Label,
	Textarea,
	Span,
    ButtonWrapper,
    ContainerBox,
} from "./send-proposal.styled";
import { useState } from "react";

export interface SendProposalProps {
    id: string;
    onCancel?: () => void;
    goBack?: () => void;
    saveCoverLetter?: () => void;
    inputText?: string;
}

export function SendProposal({id, onCancel, goBack, saveCoverLetter, inputText}: SendProposalProps) {
	const { t } = useTranslation();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IProposal>({ resolver: yupResolver(schema) });
	const [createProposal, { isError }] = useCreateProposalMutation({});

    const onSubmit = async (values: IProposal) => {
		const data: any = new FormData();
		data.append("file", values.file[0]);
		data.append("coverLetter", values.coverLetter);
		data.append("id", id);

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

    // const [inputText, setInputText] = useState();
    
    // const saveCoverLetter = (evt: any) => {
    //     // evt.preventDefault();
    //     const coverLetter = evt.target.value;
    //     setInputText(coverLetter);
    //     console.log(coverLetter)
    // };

	return (
        <ContainerBox>
            <Title fontSize="lg" tag="h1" fontWeight={700}>
                {t("sendProposalFreelancer.greeting")}
            </Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label>{t("sendProposalFreelancer.coverLetter")}</Label>
                <Textarea
                    {...register("coverLetter")}
                    rows={10}
                    maxLength={1000}
                    placeholder={t("sendProposalFreelancer.placeholderCoverLetter")}
                    value={inputText}
                    onChange={saveCoverLetter}
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
                    <StyledButton
                        buttonSize="sm" fontSize="md"
                        buttonColor="redGradient"
                        type="submit"
                        >
                        {t("sendProposalFreelancer.send")}
                    </StyledButton>
                </ButtonWrapper>
            </Form>
        </ContainerBox>
	);
}

export default SendProposal;
