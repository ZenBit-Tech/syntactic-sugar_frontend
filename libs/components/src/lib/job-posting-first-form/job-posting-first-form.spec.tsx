import { render } from "@testing-library/react";

import JobPostingFirstForm from "./job-posting-first-form";

describe("JobPostingFirstForm", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<JobPostingFirstForm />);
		expect(baseElement).toBeTruthy();
	});
});
