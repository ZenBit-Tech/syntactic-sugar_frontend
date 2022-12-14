import { render } from "@testing-library/react";

import JobCard from "./job-card";

describe("JobCard", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<JobCard />);
		expect(baseElement).toBeTruthy();
	});
});
