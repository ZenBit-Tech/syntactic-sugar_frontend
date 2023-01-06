import { render } from "@testing-library/react";

import FreelancerCardsList from "./freelancer-cards-list";

describe("FreelancerCardsList", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<FreelancerCardsList />);
		expect(baseElement).toBeTruthy();
	});
});
