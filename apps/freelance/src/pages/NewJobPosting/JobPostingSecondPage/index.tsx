import { SECOND_PAGE } from "src/utils/constants/breakpoint";
import { JobPostingContainer } from "@freelance/components";
import { useTranslation } from "react-i18next";
import { CREATE_NEW_JOB_FIRST_PAGE } from "src/utils/constants/links";

export function JobPostingSecondPage() {
	const { t } = useTranslation();
	const subTitle: string = t("newJobPosting.subTitle");

	return (
		<JobPostingContainer
			page={SECOND_PAGE}
			goBackLink={CREATE_NEW_JOB_FIRST_PAGE}
			subTitle={subTitle}
		/>
	);
}

export default JobPostingSecondPage;
