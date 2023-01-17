import { render } from "@testing-library/react";

import EditFreelancerContainer from "./edit-freelancer-container";

describe("EditFreelancerContainer", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<EditFreelancerContainer />);
		expect(baseElement).toBeTruthy();
	});
});
