import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCreateProposalMutation } from "redux/sendProposalFreelancer/proposalApi";
import { SEARCH_WORK } from "utils/constants/breakpoint";
import { IFormValues } from "./IFormValues";

export const useSendProposal = () => {
	const params = useParams();
	const { t } = useTranslation();
	const navigate = useNavigate();
	const id = String(params["id"]);
	const [createProposal, { isError }] = useCreateProposalMutation();

	const onSubmit = async (values: IFormValues) => {
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
			navigate(SEARCH_WORK);
		} catch (error) {
			alert(error);
		}
	};

	return { onSubmit };
};
