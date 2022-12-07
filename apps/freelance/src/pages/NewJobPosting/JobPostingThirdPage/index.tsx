import { useTranslation } from "react-i18next";
import { JobPostingContainer } from "@freelance/components";
import { THIRD_PAGE } from "src/utils/constants/breakpoint";
import { CREATE_NEW_JOB_SECOND_PAGE } from "utils/constants/links";

export function JobPostingThirdPage() {
	const { t } = useTranslation();

	return (
		<JobPostingContainer
			page={THIRD_PAGE}
			goBackLink={CREATE_NEW_JOB_SECOND_PAGE}
			subTitle={t("newJobPosting.subTitle")}
			createButton
		/>
	);
}

export default JobPostingThirdPage;
