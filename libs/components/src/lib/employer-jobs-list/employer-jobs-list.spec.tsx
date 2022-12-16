import { render } from "@testing-library/react";

import EmployerJobsList from "./employer-jobs-list";

describe("EmployerJobsList", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<EmployerJobsList />);
		expect(baseElement).toBeTruthy();
	});
});
