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
		<h3>Marketing, Ukraine, 3 years of experience, English: Upper Int, full time work</h3>
		<p>Cover letter</p>
		<textarea placeholder="add cover letter"></textarea>
		<label htmlFor="file">Other attachments:</label>
	    <input type="file" id="file" name="file" accept=".doc, .docs, .pdf"/>
		</>
	);
}

export default SendProposalFreelancer;
