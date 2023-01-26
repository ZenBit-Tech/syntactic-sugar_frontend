import { useGetProposalsByJobIdQuery } from "redux/sendProposalFreelancer/proposalApi";
import { Container, Pagination, StyledTitle } from "@freelance/components";
import { useTranslation } from "react-i18next";

interface IProposalsListProps {
	id: string;
	closeProposalsList?: () => void;
	openProposalsList?: () => void;
}

export function ProposalsList({ id, closeProposalsList, openProposalsList }: IProposalsListProps) {
	const { t } = useTranslation();
	const { data: proposalsList, refetch: refetchProposal } = useGetProposalsByJobIdQuery(id);

	return (
		<Container modal>
			<StyledTitle tag="h1" fontWeight={700} fontSize="lg">
				{t("proposalsList")}
			</StyledTitle>
			<Pagination
				itemsPerPage={5}
				user="employer"
				data={proposalsList}
        refetchProposal={refetchProposal}
				typePage="proposalsList"
				closeProposalsList={closeProposalsList}
				openProposalsList={openProposalsList}
			/>
		</Container>
	);
}

export default ProposalsList;
