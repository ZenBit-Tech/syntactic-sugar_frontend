import { SECOND_PAGE } from "src/utils/constants/breakpoint";
import { JobPostingContainer } from "@freelance/components";
import { useTranslation } from "react-i18next";

export function JobPostingSecondPage() {
	const { t } = useTranslation();
	const subTitle: string = t("newJobPosting.subTitle");

	return <JobPostingContainer page={SECOND_PAGE} subTitle={subTitle} />;
}

export default JobPostingSecondPage;
