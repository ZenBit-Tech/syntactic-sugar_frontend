import { render } from "@testing-library/react";

import JobPostingContainer from "./job-posting-container";

describe("JobPostingContainer", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<JobPostingContainer />);
		expect(baseElement).toBeTruthy();
	});
});
