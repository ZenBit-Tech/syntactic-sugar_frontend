import { useState } from "react";

export const useModal = () => {
	const [privacyPolicyModal, setPrivacyPolicyModal] = useState<boolean>(false);

	const openPrivacyPolicyModal = (): void => {
		setPrivacyPolicyModal(true);
	};

	const closePrivacyPolicyModal = (): void => {
		setPrivacyPolicyModal(false);
	};

	return { openPrivacyPolicyModal, closePrivacyPolicyModal, privacyPolicyModal };
};
