import { render } from "@testing-library/react";

import ProposalCard from "./proposal-card";

describe("ProposalCard", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<ProposalCard />);
		expect(baseElement).toBeTruthy();
	});
});
