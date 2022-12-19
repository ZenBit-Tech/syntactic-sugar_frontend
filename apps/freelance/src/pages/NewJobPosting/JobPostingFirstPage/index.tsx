import { useTranslation } from "react-i18next";
import { JobPostingContainer } from "@freelance/components";
import { FIRST_PAGE } from "src/utils/constants/breakpoint";
import { EMPLOYER_JOBS_PAGE } from "src/utils/constants/links";

export function JobPostingFirstPage() {
	const { t } = useTranslation();

	return (
		<JobPostingContainer
			page={FIRST_PAGE}
			goBackLink={EMPLOYER_JOBS_PAGE}
			title={t("newJobPosting.mainTitle")}
		/>
	);
}

export default JobPostingFirstPage;
