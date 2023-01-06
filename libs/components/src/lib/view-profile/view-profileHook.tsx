import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { TALENTS_PAGE } from "utils/constants/links";

export const useViewProfile = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const goBack = () => {
		navigate(TALENTS_PAGE);
	};

	return { goBack };
};
