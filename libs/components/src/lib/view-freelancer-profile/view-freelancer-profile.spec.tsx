import { render } from "@testing-library/react";

import ViewFreelancerProfile from "./view-freelancer-profile";

describe("ViewFreelancerProfile", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<ViewFreelancerProfile />);
		expect(baseElement).toBeTruthy();
	});
});
