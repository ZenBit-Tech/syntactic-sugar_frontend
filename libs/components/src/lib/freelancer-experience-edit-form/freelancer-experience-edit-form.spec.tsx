import { render } from "@testing-library/react";

import FreelancerExperienceEditForm from "./freelancer-experience-edit-form";

describe("FreelancerExperienceEditForm", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<FreelancerExperienceEditForm />);
		expect(baseElement).toBeTruthy();
	});
});
