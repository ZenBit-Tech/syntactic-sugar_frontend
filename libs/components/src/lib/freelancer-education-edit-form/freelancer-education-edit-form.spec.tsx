import { render } from "@testing-library/react";

import FreelancerEducationEditForm from "./freelancer-education-edit-form";

describe("FreelancerEducationEditForm", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<FreelancerEducationEditForm />);
		expect(baseElement).toBeTruthy();
	});
});
