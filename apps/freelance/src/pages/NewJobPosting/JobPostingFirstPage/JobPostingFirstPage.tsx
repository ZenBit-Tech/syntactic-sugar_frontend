import { useTranslation } from "react-i18next";
import { JobPostingContainer } from "@freelance/components";
import { FIRST_PAGE } from "src/utils/constants/breakpoint";

export function JobPostingFirstPage() {
	const { t } = useTranslation();

	const title: string = t("newJobPosting.mainTitle");

	return <JobPostingContainer page={FIRST_PAGE} title={title} />;
}

export default JobPostingFirstPage;
