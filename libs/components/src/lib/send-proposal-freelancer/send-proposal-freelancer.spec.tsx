import { render } from "@testing-library/react";

import SendProposalFreelancer from "./send-proposal-freelancer";

describe("SendProposalFreelancer", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<SendProposalFreelancer />);
		expect(baseElement).toBeTruthy();
	});
});
