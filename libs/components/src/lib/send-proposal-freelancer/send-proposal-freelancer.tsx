import { useTranslation } from "react-i18next";
import { useAppSelector } from "redux/hooks";
// import  profileSelectors  from "redux/sendProposalFreelancer/selectors";


/* eslint-disable-next-line */
export interface SendProposalFreelancerProps {}



export function SendProposalFreelancer(props: SendProposalFreelancerProps) {
	const {t} = useTranslation();
	// const name = useAppSelector((state) => state.profile.list);
	return (
		<>
		<h2>{t("sendProposalFreelancer.greeting")}</h2>
		<h3></h3>	
		</>
	);
}

export default SendProposalFreelancer;
