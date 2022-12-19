import { render } from "@testing-library/react";

import EmployerJobsContainer from "./employer-jobs-container";

describe("EmployerJobsContainer", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<EmployerJobsContainer />);
		expect(baseElement).toBeTruthy();
	});
});
