import { render } from "@testing-library/react";

import EditFreelancerForm from "./edit-freelancer-form";

describe("EditFreelancerForm", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<EditFreelancerForm />);
		expect(baseElement).toBeTruthy();
	});
});
