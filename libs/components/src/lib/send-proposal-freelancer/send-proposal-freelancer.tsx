import { useTranslation } from "react-i18next";
import { useAppSelector } from "redux/hooks";


/* eslint-disable-next-line */
export interface SendProposalFreelancerProps {}



export function SendProposalFreelancer(props: SendProposalFreelancerProps) {
	const {t} = useTranslation();
	// const [selector] = useAppSelector(); 
	// const count = useAppSelector((state) => state.counter.value)

	return (
		<>
		<h2>{t("sendProposalFreelancer.greeting")}</h2>
		<h3></h3>	
		</>
	);
}

export default SendProposalFreelancer;
