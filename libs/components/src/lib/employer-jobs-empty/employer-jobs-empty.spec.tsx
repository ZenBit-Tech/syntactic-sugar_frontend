import { render } from "@testing-library/react";

import EmployerJobsEmpty from "./employer-jobs-empty";

describe("EmployerJobsEmpty", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<EmployerJobsEmpty />);
		expect(baseElement).toBeTruthy();
	});
});
