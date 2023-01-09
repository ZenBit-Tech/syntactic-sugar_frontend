import { render } from "@testing-library/react";

import ProposalsList from "./proposals-list";

describe("ProposalsList", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<ProposalsList />);
		expect(baseElement).toBeTruthy();
	});
});
