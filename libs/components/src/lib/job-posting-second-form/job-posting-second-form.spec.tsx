import { render } from "@testing-library/react";

import JobPostingSecondForm from "./job-posting-second-form";

describe("JobPostingSecondForm", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<JobPostingSecondForm />);
		expect(baseElement).toBeTruthy();
	});
});
