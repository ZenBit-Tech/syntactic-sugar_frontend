import { useTranslation } from "react-i18next";
import { JobPostingContainer } from "@freelance/components";
import { FIRST_PAGE } from "src/utils/constants/breakpoint";

export function JobPostingFirstPage() {
	const { t } = useTranslation();

	return (
		<JobPostingContainer page={FIRST_PAGE} goBackLink={"#"} title={t("newJobPosting.mainTitle")} />
	);
}

export default JobPostingFirstPage;
