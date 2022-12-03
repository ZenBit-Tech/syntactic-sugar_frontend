import { useTranslation } from "react-i18next";
import { JobPostingContainer } from "@freelance/components";
import { THIRD_PAGE } from "src/utils/constants/breakpoint";

export function JobPostingThirdPage() {
	const { t } = useTranslation();

	const subTitle: string = t("newJobPosting.subTitle");

	return <JobPostingContainer page={THIRD_PAGE} subTitle={subTitle} createButton />;
}

export default JobPostingThirdPage;
