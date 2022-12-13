import { render } from "@testing-library/react";

import JobPostingThirdForm from "./job-posting-third-form";

describe("JobPostingThirdForm", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<JobPostingThirdForm />);
		expect(baseElement).toBeTruthy();
	});
});
