import { render } from "@testing-library/react";

import FreelancerCard from "./freelancer-card";

describe("FreelancerCard", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<FreelancerCard />);
		expect(baseElement).toBeTruthy();
	});
});
