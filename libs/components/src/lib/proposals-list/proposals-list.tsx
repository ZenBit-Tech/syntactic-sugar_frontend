import { useGetProposalsByJobIdQuery } from "redux/sendProposalFreelancer/proposalApi";
import { Container, Pagination, StyledTitle } from "@freelance/components";
import { useTranslation } from "react-i18next";

interface IProposalsListProps {
	id: string;
}

export function ProposalsList({ id }: IProposalsListProps) {
	const { t } = useTranslation();
	const { data: proposalsList } = useGetProposalsByJobIdQuery(id);

	console.log(proposalsList);

	return (
		<Container modal proposalsList>
			<StyledTitle tag="h1" fontWeight={700} fontSize="lg">
				{t("proposalsList")}
			</StyledTitle>
			<Pagination itemsPerPage={5} user="employer" data={proposalsList} typePage="proposalsList" />
		</Container>
	);
}

export default ProposalsList;
