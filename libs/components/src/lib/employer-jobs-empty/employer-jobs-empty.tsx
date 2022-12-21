import { useTranslation } from "react-i18next";
import { JobsParagraph } from "./employer-jobs-empty.styled";

export function EmployerJobsEmpty() {
	const { t } = useTranslation();

	return (
		<>
			<JobsParagraph>{t("employerJobsPage.noJobs")}</JobsParagraph>
		</>
	);
}

export default EmployerJobsEmpty;
