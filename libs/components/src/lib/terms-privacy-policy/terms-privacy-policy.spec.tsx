import { render } from "@testing-library/react";

import TermsPrivacyPolicy from "./terms-privacy-policy";

describe("TermsPrivacyPolicy", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<TermsPrivacyPolicy />);
		expect(baseElement).toBeTruthy();
	});
});
